import{o as n,i as a,m as p}from"./vendor.a0f7cb7c.js";const l={class:"v-doc-content"},e=p(`<div class="v-doc-card"><h3>\u4ECB\u7ECD</h3><p>\u524D\u7AEF\u5FAE\u4FE1\u516C\u4F17\u53F7\u6388\u6743\u98DF\u7528\u65B9\u6CD5\uFF0C\u652F\u6301\u533A\u5206 <code>appid</code>\u3002</p></div><div class="v-doc-card"><h3>\u524D\u7F6E\u6761\u4EF6</h3><pre><code>// .env.development
NODE_ENV = &#39;development&#39;

# appid
VUE_APP_WECHAT_APPID = &#39;\u6D4B\u8BD5appid&#39;

// .env.production
NODE_ENV = &#39;development&#39;

# appid
VUE_APP_WECHAT_APPID = &#39;\u4EA7\u7EBFappid&#39;
</code></pre><pre><code class="language-js"><span class="hljs-comment">// main.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">import</span> <span class="hljs-title class_">Auth</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vantui-components/lib/plugins/auth&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Auth</span>, {
  <span class="hljs-attr">appid</span>: process.<span class="hljs-property">env</span>.<span class="hljs-property">VUE_APP_WECHAT_APPID</span>
})
</code></pre></div><div class="v-doc-card"><h3>\u7528\u6CD5</h3><pre><code class="language-js">router.<span class="hljs-title function_">beforeEach</span>(<span class="hljs-keyword">async</span> (to, <span class="hljs-keyword">from</span>, next) =&gt; {

  <span class="hljs-keyword">const</span> loginStatus = store.<span class="hljs-property">getters</span>.<span class="hljs-property">loginStatus</span>

  <span class="hljs-keyword">switch</span> (+loginStatus) {
    <span class="hljs-keyword">case</span> <span class="hljs-number">0</span>:
      <span class="hljs-keyword">await</span> store.<span class="hljs-title function_">dispatch</span>(<span class="hljs-string">&#39;user/setLoginStatus&#39;</span>, <span class="hljs-number">1</span>)
      <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$auth</span>.<span class="hljs-title function_">setRedirect</span>()
      <span class="hljs-keyword">break</span>
    <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
      <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">await</span> store.<span class="hljs-title function_">dispatch</span>(<span class="hljs-string">&#39;user/setLoginStatus&#39;</span>, <span class="hljs-number">2</span>)
        <span class="hljs-title function_">next</span>()
      } <span class="hljs-keyword">catch</span> (err) {
        <span class="hljs-keyword">await</span> store.<span class="hljs-title function_">dispatch</span>(<span class="hljs-string">&#39;user/setLoginStatus&#39;</span>, <span class="hljs-number">0</span>)
        <span class="hljs-title function_">next</span>(<span class="hljs-string">&#39;/404&#39;</span>)
      }
      <span class="hljs-keyword">break</span>
    <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
      <span class="hljs-comment">// determine whether the user has logged in</span>
      <span class="hljs-keyword">const</span> hasToken = cache.<span class="hljs-title function_">getItem</span>(<span class="hljs-variable constant_">ACCESS_TOKEN</span>)
      <span class="hljs-keyword">if</span> (hasToken) {
        <span class="hljs-keyword">if</span> (to.<span class="hljs-property">path</span> === <span class="hljs-string">&#39;/login&#39;</span>) {
          <span class="hljs-comment">// if is logged in, redirect to the home page</span>
          <span class="hljs-title function_">next</span>({ <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/&#39;</span> })
          <span class="hljs-title class_">NProgress</span>.<span class="hljs-title function_">done</span>() <span class="hljs-comment">// hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939</span>
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">const</span> userInfo = store.<span class="hljs-property">getters</span>.<span class="hljs-property">userInfo</span>
          <span class="hljs-keyword">if</span> (userInfo) {
            <span class="hljs-title function_">next</span>()
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$auth</span>.<span class="hljs-title function_">setRedirect</span>(<span class="hljs-string">&#39;/login&#39;</span>)
          }
        }
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-comment">/* has no token*/</span>
        <span class="hljs-keyword">if</span> (whiteList.<span class="hljs-title function_">indexOf</span>(to.<span class="hljs-property">path</span>) !== -<span class="hljs-number">1</span>) {
          <span class="hljs-comment">// in the free login whitelist, go directly</span>
          <span class="hljs-title function_">next</span>()
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-comment">// other pages that do not have permission to access are redirected to the login page.</span>
          <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$auth</span>.<span class="hljs-title function_">setRedirect</span>(<span class="hljs-string">&#39;/login&#39;</span>)
        }
      }
      <span class="hljs-keyword">break</span>
  }
})
</code></pre></div>`,3),t=[e],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",l,t))}};export{j as default};
