"use strict";(self.webpackChunklunat_1_c=self.webpackChunklunat_1_c||[]).push([[2324],{1174:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=r(5893),t=r(1151);const l={title:"",sidebar_label:"Collections"},s=void 0,a={id:"records/vba/\u4e24\u6570\u4e4b\u548c",title:"",description:"No.1 \u9009\u53d6\u6587\u4ef6\u5939",source:"@site/docs/records/vba/\u4e24\u6570\u4e4b\u548c.md",sourceDirName:"records/vba",slug:"/records/vba/\u4e24\u6570\u4e4b\u548c",permalink:"/lunat1c/docs/records/vba/\u4e24\u6570\u4e4b\u548c",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/records/vba/\u4e24\u6570\u4e4b\u548c.md",tags:[],version:"current",frontMatter:{title:"",sidebar_label:"Collections"},sidebar:"records",previous:{title:"VBA",permalink:"/lunat1c/docs/category/vba"}},i={},d=[{value:"No.1 \u9009\u53d6\u6587\u4ef6\u5939",id:"no1-\u9009\u53d6\u6587\u4ef6\u5939",level:3},{value:"No.2 \u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\uff08\u4e0d\u5305\u542bSubFolder\uff09",id:"no2-\u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\u4e0d\u5305\u542bsubfolder",level:3},{value:"No.3 \u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\uff08\u5305\u542bSubFolder\uff09",id:"no3-\u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\u5305\u542bsubfolder",level:3},{value:"No.4 \u53d6\u6700\u7ec8\u884c",id:"no4-\u53d6\u6700\u7ec8\u884c",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"no1-\u9009\u53d6\u6587\u4ef6\u5939",children:"No.1 \u9009\u53d6\u6587\u4ef6\u5939"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udd5a","\u5728\u9700\u8981\u5faa\u73af\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u5939\u4e2d\u591a\u4e2a\u6587\u4ef6\u65f6\uff0c\u63d0\u4f9b\u9009\u62e9\u6587\u4ef6\u5939\u7684\u5f39\u7a97\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vba",children:'Sub GetFolderPath()\r\n\r\n    \' FolderPath\r\n    Dim folderPath As String\r\n\r\n    \' \u8c03\u7528\u65b9\u6cd5\r\n    With Application.FileDialog(msoFileDialogFolderPicker)\r\n        \' \u5f39\u7a97\u540d\u79f0\r\n        .Title = "choose folder"\r\n\r\n        \' \u6309\u4e0bOK .Show = -1;\r\n        \' \u6309\u4e0bCancel .Show = 0;\r\n\r\n        If .Show = -1 Then\r\n            folderPath = .SelectedItems(1)\r\n\r\n            \' \u8d4b\u503c\u7ed9\u4f60\u60f3\u8981\u7684\u4f4d\u7f6e\r\n            \' ThisWorkbook.Worksheets("Sheet1").Range("D3").value = folderPath\r\n            ActiveSheet.Range("D3").value = folderPath\r\n            \' Range("D3").value = folderPath\r\n\r\n        End If\r\n    End With\r\n\r\nEnd Sub\n'})}),"\n",(0,o.jsx)(n.h3,{id:"no2-\u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\u4e0d\u5305\u542bsubfolder",children:"No.2 \u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\uff08\u4e0d\u5305\u542bSubFolder\uff09"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udd5a","\u5faa\u73af\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u5939\u4e2d\u591a\u4e2a\u6587\u4ef6\uff08\u53ef\u4ee5\u6307\u5b9a\u6587\u4ef6\u540e\u7f00\u540d\uff09\uff0c\u7136\u540e\u6dfb\u52a0\u4f60\u60f3\u8981\u5bf9\u6587\u4ef6\u8fdb\u884c\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\udca1","\u53ef\u4ee5\u6539\u5199\u4e3a\u5e26\u53c2\u6570\u7c7b\u578b"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vba",children:"Sub ReadFilesInFolder()\r\n    Dim folderPath As String\r\n    Dim fileExtension As String\r\n    Dim fileName As String\r\n    Dim fileContent As String\r\n\r\n    ' \u8fd9\u91cc\u7528\u7684\u662f\u4e0a\u9762\u7684D3\u7684value\uff0c\u53ef\u4ee5\u81ea\u884c\u8d4b\u503c\r\n    folderPath = Range(\"D3\").value\r\n    ' \u6307\u5b9a\u60f3\u8981\u8bfb\u53d6\u7684\u6587\u4ef6\u540e\u7f00\r\n    fileExtension = \"txt\"\r\n\r\n    ' \u4f7f\u7528 Dir \u51fd\u6570\u5217\u51fa\u6587\u4ef6\u5939\u4e2d\u6240\u6709\u5177\u6709\u6307\u5b9a\u540e\u7f00\u7684\u6587\u4ef6\r\n    ' \u5c06\u7b2c\u4e00\u4e2a\u6587\u4ef6\u540d\u8d4b\u503c\u7ed9 fileName \u53d8\u91cf\r\n    fileName = Dir(folderPath & \"\\\\*.\" & fileExtension)\r\n    ' \u5faa\u73af\u6240\u6709\u6587\u4ef6\r\n    Do While fileName <> \"\"\r\n        ' \u6253\u5f00\u6587\u4ef6\u4e3a#1\u7528\u4e8e\u8f93\u5165\r\n        Open folderPath & \"\\\\\" & fileName For Input As #1\r\n\r\n        ' Input$ \u51fd\u6570\u7528\u4e8e\u4ece\u6253\u5f00\u7684\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6307\u5b9a\u957f\u5ea6\u7684\u6587\u672c\r\n        ' LOF(1) \u6307\u5b9a\u4e86\u8981\u8bfb\u53d6\u7684\u957f\u5ea6\uff0c#1 \u6307\u5b9a\u4e86\u6587\u4ef6\u53f7\r\n        ' \u5176\u4e2dLOF(1) \u51fd\u6570\u8fd4\u56de\u6253\u5f00\u6587\u4ef6\u7684\u957f\u5ea6\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\r\n        ' \u5c06\u6253\u5f00\u7684\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u8bfb\u53d6\r\n        fileContent = Input$(LOF(1), #1)\r\n\r\n        ' \u5173\u95ed\u6587\u4ef6\r\n        Close #1\r\n\r\n        ' \u8d4b\u503c\u7ed9cell\uff08\u53ef\u81ea\u884c\u66f4\u6539\uff09\r\n        Range(\"B\" & Cells(Rows.Count, 2).End(xlUp).row + 1).value = fileContent\r\n        ' \u83b7\u53d6\u4e0b\u4e00\u4e2a\u6587\u4ef6\u540d\uff0c\u7ee7\u7eed\u5faa\u73af\r\n        fileName = Dir\r\n    Loop\r\nEnd Sub\n"})}),"\n",(0,o.jsx)(n.h3,{id:"no3-\u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\u5305\u542bsubfolder",children:"No.3 \u4f9d\u6b21\u8bfb\u53d6\u6587\u4ef6\uff08\u5305\u542bSubFolder\uff09"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udd5a","\u5faa\u73af\u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u5939\u4e2d\u591a\u4e2a\u6587\u4ef6\uff08\u53ef\u4ee5\u6307\u5b9a\u6587\u4ef6\u540e\u7f00\u540d\uff09\uff0c\u7136\u540e\u6dfb\u52a0\u4f60\u60f3\u8981\u5bf9\u6587\u4ef6\u8fdb\u884c\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["FSO\u8fd8\u6709\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u64cd\u4f5c\u78c1\u76d8\u3001\u6587\u4ef6\u5939\u3001\u6587\u4ef6\u7b49\uff0c\u8be6\u89c1","\ud83d\udc49",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/zh-tw/office/vba/language/reference/user-interface-help/filesystemobject-object",title:"go",children:"FSO"})]}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\ude45\u200d\u2642\ufe0f",'\u4f46\u662fFSO\u65e0\u6cd5\u64cd\u4f5c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1b\u5982\u9700\u8981\uff0c\u8bf7\u4f7f\u7528CreateObject("ADODB.Stream")']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vba",children:'Set objStream = CreateObject("ADODB.Stream")\r\n    objStream.Charset = "utf-8"\r\n    objStream.Open\r\n    objStream.LoadFromFile (FilePath)\r\n    strData = objStream.ReadText()\n'})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vba",children:"Sub ReadFilesInFolder(folderPath)\r\n    Dim fso As Object\r\n    Dim folder As Object\r\n    Dim subfolder As Object\r\n    Dim file As Object\r\n    Dim fileExtension As String    \r\n\r\n    Set fso = CreateObject(\"Scripting.FileSystemObject\")\r\n    ' \u5229\u7528fso\u7684GetFolder\u65b9\u6cd5\u8bfb\u53d6\u6587\u4ef6\u5939\u4e2d\u7684\u5185\u5bb9\r\n    Set folder = fso.GetFolder(folderPath)\r\n    ' \u6307\u5b9a\u60f3\u8981\u8bfb\u53d6\u7684\u6587\u4ef6\u540e\u7f00\r\n    fileExtension = \"txt\"\r\n\r\n    ' \u5faa\u73af\u904d\u5386\u6587\u4ef6\u5939\u4e2d\u7684\u6bcf\u4e2a\u6587\u4ef6\r\n    For Each file In folder.Files\r\n        ' \u68c0\u67e5\u6587\u4ef6\u662f\u5426\u5177\u6709\u6307\u5b9a\u7684\u6587\u4ef6\u540e\u7f00\r\n        If fso.GetExtensionName(file.Path) = fileExtension Then\r\n            ' \u6309\u9700\u5904\u7406\u6587\u4ef6\r\n            ' ...\r\n        End If\r\n    Next file\r\n\r\n    ' \u5faa\u73af\u904d\u5386\u6587\u4ef6\u5939\u4e2d\u7684\u6bcf\u4e2a\u5b50\u6587\u4ef6\u5939\r\n    For Each subfolder In folder.Subfolders\r\n        ' \u5bf9\u6bcf\u4e2a\u5b50\u6587\u4ef6\u5939\u9012\u5f52\u8c03\u7528\u76f8\u540c\u7684\u5faa\u73af\r\n        ReadFilesInFolder(subfolder)\r\n    Next subfolder\r\nEnd Sub\n"})}),"\n",(0,o.jsx)(n.h3,{id:"no4-\u53d6\u6700\u7ec8\u884c",children:"No.4 \u53d6\u6700\u7ec8\u884c"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udd5a","\u62ff\u5230sheet\u4e2d\u8fd8\u672a\u7f16\u8f91\u7684\u6700\u540e\u4e00\u884c"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vba",children:"    Dim LastRow As Integer\r\n    ' \u5982\u679c\u60f3\u8981\u4ece\u522b\u7684\u5217\u8fdb\u884c\u5224\u65ad\uff0c\u8bf7\u66f4\u6539K\u4e3a\u4f60\u60f3\u8981\u7684\u5217\r\n    LastRow = Range(\"K\" & Rows.Count).End(xlUp).row + 1\r\n    ' \u540c\u6837\u7684\u6548\u679c\r\n    LastRow = [K65536].End(xlUp).row + 1\r\n    MsgBox (LastRow)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var o=r(7294);const t={},l=o.createContext(t);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);