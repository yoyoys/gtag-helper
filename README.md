<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.gstatic.cn/analytics-suite/header/suite/v2/ic_tag_manager.svg" alt="Project logo"></a>
</p>

<h3 align="center">gtag-helper</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/yoyoys/gtag-helper.svg)](https://github.com/yoyoys/gtag-helper/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/yoyoys/gtag-helper.svg)](https://github.com/yoyoys/gtag-helper/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  gtag.js class helper with typescript
</p>

## 📝 Table of Contents

- [Usage](#usage)
- [Authors](#authors)
<!-- - [Contributing](../CONTRIBUTING.md) -->
<!-- - [TODO](../TODO.md) -->
<!-- - [Acknowledgments](#acknowledgement) -->
## 🎈 Usage <a name="usage"></a>
```bash
npm i gtag-helper
```

```ts
import GtagHelper from 'gtag-helper';

const gtag = new GtagHelper(options.GA_MEASUREMENT_ID, { noInit: true });

const options: GtagConfigOptions = {
  send_page_view: true;
  page_path: YOUR_PATH;
}

gtag.config(options);
// you can easily add this to your SPA router changed event.
gtag.pageView();

```
## ✍️ Authors <a name = "authors"></a>

- [@yoyoys](https://github.com/yoyoys) - Idea & Initial work

<!-- See also the list of [contributors](https://github.com/yoyoys/gtag-helper) who participated in this project. -->

<!-- ## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References -->
