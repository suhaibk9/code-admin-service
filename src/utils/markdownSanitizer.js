const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const TurndownService = require('turndown');
function sanitizeMarkdown(markdown) {
  //Convert markdown to HTML
  const convertedHtml = marked.parse(markdown);
  console.log('Converted HTML: ', convertedHtml);
  //Sanitize the HTML
  const sanitizedHtml = sanitizeHtml(convertedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });
  console.log('Sanitized HTML: ', sanitizedHtml);
  const turndownService = new TurndownService();
  console.log('Turndown Service: ', turndownService);
  return turndownService.turndown(sanitizedHtml);
}
module.exports = sanitizeMarkdown;
