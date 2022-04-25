export const domPurifyConfig = {
  FORBID_ATTR: ['style'],
  FORBID_TAGS: ['script'],
  ADD_TAGS: ['gd-footer', 'iframe' ],
  ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  // ADD_URI_SAFE_ATTR: ['gd-footer'],
  KEEP_CONTENT: false,
  // SAFE_FOR_TEMPLATES: true,
  // SANITIZE_DOM : false,
  USE_PROFILES: {html: true, angular: true},
  // CUSTOM_ELEMENT_HANDLING: {
  //   tagNameCheck: (tagName: any) => tagName.match(/^gd-/), // allow all tags starting with "foo-"
  //   // attributeNameCheck: (attr) => attr.match(/baz/), // allow all containing "baz"
  //   allowCustomizedBuiltInElements: false, // allow customized built-ins
  //   // allowCustomizedBuiltInElements: true
  // },

  // RETURN_DOM: true,
  // ALLOW_UNKNOWN_PROTOCOLS: true,
  // KEEP_CONTENT: false,
  // FORCE_BODY: true,
  // IN_PLACE: true,
  // RETURN_DOM_FRAGMENT: true,
  // RETURN_DOM: true,
  // allowCustomizedBuiltInElements: true
  // RETURN_TRUSTED_TYPE: true
};
