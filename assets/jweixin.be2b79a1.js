import{o as a,i as n,j as l}from"./vendor.2fdeaaab.js";const p={class:"v-doc-content"},c=l(`<div class="v-doc-card"><h3>\u4ECB\u7ECD</h3><p>\u5FAE\u4FE1JSSDK\u98DF\u7528\u65B9\u6CD5\u3002</p></div><div class="v-doc-card"><h3>\u524D\u7F6E\u6761\u4EF6</h3><pre><code class="language-js"><span class="hljs-comment">// main.js</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">import</span> <span class="hljs-title class_">JWeixin</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vantui-components/lib/plugins/jweixin&#39;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">JWeixin</span>)
</code></pre></div><div class="v-doc-card"><h3>\u521D\u59CB\u5316</h3><p>\u4E00\u822C\u4F1A\u653E\u5230 <code>store</code> \u91CC\u9762\u4F7F\u7528\uFF0C\u8FD9\u6837\u4F1A\u65B9\u4FBF\u6211\u5230\u5904\u8C03\u7528\u3002</p><pre><code class="language-js"><span class="hljs-comment">// store =&gt; app.js</span>
<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-title function_">initWxConfig</span>(<span class="hljs-params">{ commit }</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> url = <span class="hljs-built_in">encodeURIComponent</span>(<span class="hljs-variable language_">window</span>.<span class="hljs-property">location</span>.<span class="hljs-property">href</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">&#39;#&#39;</span>)[<span class="hljs-number">0</span>])
      <span class="hljs-comment">// wxconfig \u540E\u7AEFapi</span>
      <span class="hljs-title function_">wxconfig</span>(url).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        <span class="hljs-keyword">const</span> config = <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">assign</span>({}, res, { <span class="hljs-attr">debug</span>: <span class="hljs-literal">false</span> })
        <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$wx</span>.<span class="hljs-title function_">config</span>(config)
        <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$wx</span>.<span class="hljs-title function_">ready</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title function_">commit</span>(<span class="hljs-string">&#39;SET_WECHAT_READY&#39;</span>, <span class="hljs-literal">true</span>)
          <span class="hljs-title function_">resolve</span>()
        })
        <span class="hljs-title class_">Vue</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">$wx</span>.<span class="hljs-title function_">error</span>(<span class="hljs-function">(<span class="hljs-params">error</span>) =&gt;</span> {
          <span class="hljs-title function_">commit</span>(<span class="hljs-string">&#39;SET_WECHAT_READY&#39;</span>, <span class="hljs-literal">false</span>)
          <span class="hljs-title function_">reject</span>()
        })
      }).<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params">error</span>) =&gt;</span> {
        <span class="hljs-title function_">commit</span>(<span class="hljs-string">&#39;SET_WECHAT_READY&#39;</span>, <span class="hljs-literal">false</span>)
        <span class="hljs-title function_">reject</span>()
      })
    })
  },
}

<span class="hljs-comment">// \u5168\u5C40\u8DEF\u7531\u5B88\u536B</span>
router.<span class="hljs-title function_">beforeEach</span>(<span class="hljs-keyword">async</span> (to, <span class="hljs-keyword">from</span>, next) =&gt; {
  <span class="hljs-comment">// \u521D\u59CB\u5316\u5FAE\u4FE1jssdk</span>
  <span class="hljs-keyword">if</span> (!store.<span class="hljs-property">getters</span>.<span class="hljs-property">wechatReady</span>) {
    <span class="hljs-keyword">await</span> store.<span class="hljs-title function_">dispatch</span>(<span class="hljs-string">&#39;user/initWxConfig&#39;</span>)
  }
})
</code></pre></div><div class="v-doc-card"><h3>scanQRCode</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">scanQRCode</span>(<span class="hljs-params"></span>) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">$wx</span>.<span class="hljs-title function_">scanQRCode</span>({
        <span class="hljs-attr">needResult</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// \u9ED8\u8BA4\u4E3A0\uFF0C\u626B\u63CF\u7ED3\u679C\u7531\u5FAE\u4FE1\u5904\u7406\uFF0C1\u5219\u76F4\u63A5\u8FD4\u56DE\u626B\u63CF\u7ED3\u679C\uFF0C</span>
        <span class="hljs-attr">scanType</span>: [<span class="hljs-string">&#39;qrCode&#39;</span>, <span class="hljs-string">&#39;barCode&#39;</span>], <span class="hljs-comment">// \u53EF\u4EE5\u6307\u5B9A\u626B\u4E8C\u7EF4\u7801\u8FD8\u662F\u4E00\u7EF4\u7801\uFF0C\u9ED8\u8BA4\u4E8C\u8005\u90FD\u6709</span>
        <span class="hljs-attr">success</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">res</span>) {
          <span class="hljs-keyword">var</span> result = res.<span class="hljs-property">resultStr</span>; <span class="hljs-comment">// \u5F53needResult \u4E3A 1 \u65F6\uFF0C\u626B\u7801\u8FD4\u56DE\u7684\u7ED3\u679C</span>
        }
      })
    }
  }
}
</code></pre></div><div class="v-doc-card"><h3>previewImage</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-title function_">previewImage</span>(<span class="hljs-params">{ path }</span>) {
      <span class="hljs-keyword">const</span> urls = <span class="hljs-variable language_">this</span>.<span class="hljs-property">files</span>.<span class="hljs-title function_">map</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.<span class="hljs-property">path</span>)
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">$wx</span>.<span class="hljs-title function_">previewImage</span>({
        <span class="hljs-attr">current</span>: path,
        <span class="hljs-attr">urls</span>: urls
      })
    },
  }
}
</code></pre></div>`,5),t=[c],j={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",p,t))}};export{j as default};
