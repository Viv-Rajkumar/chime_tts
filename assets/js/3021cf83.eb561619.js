"use strict";(self.webpackChunkchime_tts=self.webpackChunkchime_tts||[]).push([[2857],{6942:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(4848),n=i(8453);const r={sidebar_position:1},o="Chime TTS Wiki",d={id:"getting-started",title:"Chime TTS Wiki",description:"Chime TTS logo",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/chime_tts/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial Intro",permalink:"/chime_tts/docs/intro"}},c={},l=[{value:"If you find Chime TTS useful, consider showing your support: <a><img></img></a>",id:"if-you-find-chime-tts-useful-consider-showing-your-support-",level:4},{value:"What is Chime TTS?",id:"what-is-chime-tts",level:2},{value:"The Problem:",id:"the-problem",level:3},{value:"The Solution:",id:"the-solution",level:3},{value:"Features",id:"features",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"How Do I Use It?",id:"how-do-i-use-it",level:2},{value:"Services",id:"services",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Support and Discussion",id:"support-and-discussion",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"chime-tts-wiki",children:"Chime TTS Wiki"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Chime TTS logo",src:i(2751).A+"",width:"200",height:"200"})}),"\n",(0,t.jsx)(s.p,{children:"Chime TTS is a custom Home Assistant integration that eliminates the audio lag between playing a chime/notification sound effect before a TTS audio notification."}),"\n",(0,t.jsxs)(s.h4,{id:"if-you-find-chime-tts-useful-consider-showing-your-support-",children:["If you find Chime TTS useful, consider showing your support: ",(0,t.jsx)("a",{href:"https://www.buymeacoffee.com/nimroddolev",target:"_blank",children:(0,t.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy me a coffee",id:"buyMeACoffee"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#what-is-chime-tts",children:"What is Chime TTS?"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#features",children:"Features"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#quick-start",children:"Quick Start"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#how-do-i-use-it",children:"How Do I Use It?"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#configuration",children:"Configuration"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#support-and-discussion",children:"Support and Discussion"})}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"what-is-chime-tts",children:"What is Chime TTS?"}),"\n",(0,t.jsx)(s.h3,{id:"the-problem",children:"The Problem:"}),"\n",(0,t.jsxs)("div",{id:"problemDiv",children:[(0,t.jsx)("img",{src:"../img/the_problem.png"}),(0,t.jsx)("img",{src:"../img/travolta.gif",class:"travolta"})]}),"\n",(0,t.jsx)(s.p,{children:"Home Assistant's Text-To-Speech (TTS) audio messages are a great way to provide real-time updates, but by the time you hear a message playing you've missed the start of the message! \ud83d\ude48"}),"\n",(0,t.jsx)(s.p,{children:"Adding a notification chime before the TTS makes sense, but in practice this introduces a delay between the two caused by the networking latency of cloud TTS platforms, audio processing, and a delay before playback begins on speakers."}),"\n",(0,t.jsx)(s.h3,{id:"the-solution",children:"The Solution:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/nimroddolev/chime_tts/assets/1849295/54ec4f20-7eaf-4180-b159-4feb4afc334a",alt:"with_chime_tts-dark"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Chime TTS"})," solves this issue by stitching these audio files together as ",(0,t.jsx)(s.em,{children:"a single file"})," locally on your Home Assistant device, and played to your speakers in a single event, eliminating any lag."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(s.p,{children:"Chime TTS offers various features that enhance TTS audio playback experience:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"No lag or timing issues:"})," Precise timing between audio files without cloud TTS delays."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Customizable audio cues:"})," Play preset or custom audio before and after TTS messages."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Flexible TTS platform selection:"})," Supports various ",(0,t.jsx)(s.a,{href:"https://www.home-assistant.io/integrations/#text-to-speech",children:"TTS platform integrations"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Easy service invocation:"})," Use the 'chime_tts.say' service in automations and scripts."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Set media player notification volume:"})," Restore volume after playback."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable TTS playback speed:"})," Set the TTS audio speed anywhere from 100-200%."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable delay:"})," Set custom delays between audio and TTS."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Configurable overlay:"})," Set custom overlay durations for audio and TTS."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Caching:"})," Cache audio for faster playback."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Speaker Groups:"})," Group speakers for simultaneous playback."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(s.p,{children:"Follow these easy steps to get started with Chime TTS:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/nimroddolev/chime_tts/wiki/Installation#1-installation",children:"Installation"})," - Quickly install Chime TTS via HACS or manually."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/nimroddolev/chime_tts/wiki/Installation#2-add-the-chime-tts-integration",children:"Add the Integration"})," - Add Chime TTS to your Home Assistant instance."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"how-do-i-use-it",children:"How Do I Use It?"}),"\n",(0,t.jsx)(s.h3,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(s.p,{children:["Chime TTS adds three new services to your Home Assistant instance: ",(0,t.jsx)(s.code,{children:"chime_tts.say"}),", ",(0,t.jsx)(s.code,{children:"chime_tts.say_url"})," and ",(0,t.jsx)(s.code,{children:"chime_tts.clear_cache"}),". Discover how you can use these services and the features they offer:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/nimroddolev/chime_tts/wiki/chime_tts.say",children:"chime_tts.say"}),": Play audio and TTS messages with various settings."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/nimroddolev/chime_tts/wiki/chime_tts.say_url",children:"chime_tts.say_url"}),": Generates a publicly accessible URL to the MP3 file generated by ",(0,t.jsx)(s.code,{children:"chime_tts.say"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/nimroddolev/chime_tts/wiki/chime_tts.clear_cache",children:"chime_tts.clear_cache"}),": Clear generated audio cache."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["You can customise the following elements for the ",(0,t.jsx)(s.code,{children:"chime_tts.say"})," and ",(0,t.jsx)(s.code,{children:"chime_tts.say_url"})," services through the configuration page, located at:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Settings"})," --\x3e ",(0,t.jsx)(s.code,{children:"Devices & services"})," --\x3e ",(0,t.jsx)(s.code,{children:"Chime TTS"})," --\x3e ",(0,t.jsx)(s.code,{children:"CONFIGURE"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/nimroddolev/chime_tts/assets/1849295/4978df58-9e13-4a50-b16d-109a442f5b29",alt:"configuration"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Config Option"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Timeout"})}),(0,t.jsx)(s.td,{children:"Set the maximum number of seconds before the service call is terminated (useful if you have long TTS messages and don't want the service end prematurely)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"60"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Media Folder"})}),(0,t.jsx)(s.td,{children:"Media Folder - Media folder for storing temporary files."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"local"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Downloaded Chimes Folder"})}),(0,t.jsx)(s.td,{children:"Chime MP3 Folder - Path to the local folder where downloaded chime mp3 files are saved."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/media/sounds/temp/chime_tts/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Temporary MP3 Folder"})}),(0,t.jsx)(s.td,{children:"Temporary MP3 Folder - Path to the local folder where the generated mp3 files are saved."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/media/sounds/temp/chime_tts/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Public MP3 Folder"})}),(0,t.jsxs)(s.td,{children:["Public MP3 Folder - Path to the publicly accessible folder used to store MP3 files generated by ",(0,t.jsx)(s.code,{children:"chime_tts.say_url"})," service."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/www/chime_tts/"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Custom Chimes"})}),(0,t.jsxs)(s.td,{children:["Add the full file paths to your own custom chime audio files. Once added, you can select your custom chimes form the drop-down list UI in the ",(0,t.jsx)(s.code,{children:"chime_tts.say"})," and ",(0,t.jsx)(s.code,{children:"chime_tts.say_url"})," services."]}),(0,t.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"support-and-discussion",children:"Support and Discussion"}),"\n",(0,t.jsxs)(s.p,{children:["For questions, suggestions, and community discussion about Chime TTS, visit our ",(0,t.jsx)(s.a,{href:"https://community.home-assistant.io/t/chime-tts-play-audio-before-after-tts-audio-lag-free/578430",children:"Community Forum"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2751:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/chime_tts-1eee02118dd3629bbc800ca1ca7c3dd5.png"},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>d});var t=i(6540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);