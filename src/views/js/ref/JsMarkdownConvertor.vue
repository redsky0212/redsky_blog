<template>
  <div>
    <div class="page-header">
      <h1>
        remarkable
        <small>
          <i class="ace-icon fa fa-angle-double-right"></i>
          markdown을 html로 변환하는 소스
        </small>
      </h1>
    </div><!-- /.page-header -->
    <div class="row">
      <div class="col-xs-12">
        
        <!-- PAGE CONTENT BEGINS -->
		<div class="row">
          <div class="col-xs-12">
            
            <div class="row full-height">
              <div class="col-xs-6 full-height">
                <textarea class="source full-height" @keyup="onKeyup"></textarea>
              </div>
              <section class="col-x-6 full-height">
                <div class="result-html full-height"></div>
              </section>
            </div>


          </div>
		</div>
      </div>
    </div>     
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Remarkable } from 'remarkable';
// import hljs from 'highlight.js/lib/highlight';
// import 'highlight.js/styles/github.css';

@Component
export default class JsMarkdownConvertor extends Vue {
  // private slotProps: string = '{{ slotProps }}';
  private defaults: any = {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      true,         // autoconvert URL-like texts to links
    linkTarget:   '',           // set target to open link in
    typographer:  true,         // Enable smartypants and other sweet transforms

    // // options below are for demo only
    // _highlight: true,
    // _strict: false,
    // _view: 'html',             // html / src / debug
  };
  private md: any;

  private mounted() {
    window.prettyPrint();


    // this.defaults.highlight = (str, lang) => {
    //   if (!this.defaults._highlight || !hljs) { return ''; }

    //   const hljs = hljs;
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return hljs.highlight(lang, str).value;
    //     } catch (__) {}
    //   }

    //   try {
    //     return hljs.highlightAuto(str).value;
    //   } catch (__) {}

    //   return '';
    // };
    this.md = new Remarkable('full', this.defaults);
  }
  private onKeyup(event: Event) {
    const textarea = event.currentTarget as HTMLTextAreaElement;
    const htmlStr: string = this.md.render(textarea.value);
    (document.querySelector('.result-html') as HTMLElement).innerHTML = htmlStr;
  }
}
</script>

<style scoped>
html, body, .full-height {
  height: 100%;
}
*:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.source {
  width: 100%;
  height: 1000px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 13px;
  padding: 2px;
  line-height: inherit;
  margin: 0;
  font: inherit;
  color: inherit;
}
.result-html {
  display: block;
  height: 1000px;
  padding: 2px 10px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>