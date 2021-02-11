### 什麼是 Meta Tag？

Meta Tag 負責提供網頁的重點資訊，讓搜尋引擎能了解網頁內容，進而在結果頁中呈現搜尋結果（例如搜尋到的標題、描述簡介等）；同時亦能告訴瀏覽器如何正確顯示該網頁。簡單地說，Meta Tag 就是用來表達網頁資訊的資訊（data about data）。它們寫在 HTML 文件的 head 標籤中，使用者在網頁上是看不見的。

### 常見 Meta Tag 有哪些？

Meta Tag 常見的 attribute 有 charset、name、content、http-equiv 等。若你在標籤中發現「og:」開頭，則代表它們是[Open Graph Meta Tags](https://ahrefs.com/blog/open-graph-meta-tags/ "Open Graph Meta Tags")，用於控制網頁被轉傳、分享時所顯示的資訊。

定義網頁編碼：

```html
<meta charset="utf-8" />
```

定義網頁描述：

```html
<meta
  name="description"
  content="Meta tags define metadata about an HTML document."
/>
```

設定網頁寬度為裝置的寬度、縮放比例為 100%：（viewport 專門為行動裝置而生）

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

讓搜尋引擎不要將該頁加入索引，也不要爬面頁面內的連結（預設為：index,follow）

```html
<meta name="”robots”" content="noindex,nofollow" />
```
