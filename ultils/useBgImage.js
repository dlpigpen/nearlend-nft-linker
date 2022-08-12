import { useEffect, useState } from "react";
export const useBgImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  function getImgAll(doc) {
    return new Promise((resolve, reject) => {
      loadImgAll(Array.from(searchDOM(doc))).then(resolve, reject);
    });

    function searchDOM(doc) {
      const srcChecker = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i;
      return Array.from(doc.querySelectorAll("*")).reduce(
        (collection, node) => {
          // bg src
          let prop = window
            .getComputedStyle(node, null)
            .getPropertyValue("background-image");
          let match = srcChecker.exec(prop);
          if (match) {
            collection.add(match[1]);
          }

          if (/^img$/i.test(node.tagName)) {
            collection.add(node.src);
          } else if (/^frame$/i.test(node.tagName)) {
            try {
              searchDOM(
                node.contentDocument || node.contentWindow.document
              ).forEach((img) => {
                if (img) {
                  collection.add(img);
                }
              });
            } catch (e) {}
          }
          return collection;
        },
        new Set()
      );
    }

    function loadImg(src, timeout = 500) {
      const imgPromise = new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
          resolve({
            src: src,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
        };
        img.onerror = reject;
        img.src = src;
      });
      const timer = new Promise((_, reject) => {
        setTimeout(reject, timeout);
      });
      return Promise.race([imgPromise, timer]);
    }

    function loadImgAll(imgList, timeout = 500) {
      return new Promise(() => {
        Promise.all(
          imgList
            .map((src) => loadImg(src, timeout))
            .map((p) => p.catch((e) => false))
        )
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => setIsLoading(false));
      });
    }
  }

  useEffect(() => {
    getImgAll(document);
  }, []);
  return { isLoading };
};
