const owner = "你的GitHub用户名";
const repo = "仓库名";
const path = "images";

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
  .then(res => res.json())
  .then(files => {
    const gallery = document.getElementById("gallery");

    files
      .filter(f => f.type === "file")
      .forEach(file => {
        const img = document.createElement("img");
        img.src = file.download_url;
        gallery.appendChild(img);
      });
  });
