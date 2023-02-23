const express = require("express");
const https = require("https");
const multer = require("multer");
const FormData = require("form-data");
const fs = require("fs");

const app = express();
const port = 3000;
const SUBSCRIPTION_KEY = "c6b8db09081f405888e862cb7ff52d23";

if (!SUBSCRIPTION_KEY) {
  throw new Error("Missing the AZURE_SUBSCRIPTION_KEY environment variable");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/search", upload.single("image"), (req, res) => {
  const imageUrl = `https://${req.hostname}/${req.file.path}`;

  const form = new FormData();
  form.append("image", fs.createReadStream(req.file.path));

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
    },
  };

  form.submit(
    {
      hostname: "api.cognitive.microsoft.com",
      path: "/bing/v7.0/images/visualsearch",
      headers: options.headers,
    },
    (err, response) => {
      if (err) {
        console.log(err);
        return;
      }

      let body = "";
      response.on("data", (part) => (body += part));
      response.on("end", () => {
        const searchResults = JSON.parse(body).tags.map(
          (tag) =>
            tag.actions.find(
              (action) => action.actionType === "VisualSearchSimilarImages"
            )?.data?.value
        );
        res.json(searchResults);
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
