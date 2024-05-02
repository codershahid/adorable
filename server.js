import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import renderApp from "./dist/server/ServerApp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(__dirname, "./dist/client/index.html")).toString();

const parts = html.split("not rendered");

const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "./dist/client/assets")));
app.use((req, res) => {
  res.write(parts[0]);
  const stream = renderApp(req.url, {
    onShellReady() {
      // if seo is very critical for your project, do nothing here
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // if seo is very critical for your project, do stream.pipe(res);
      // last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
