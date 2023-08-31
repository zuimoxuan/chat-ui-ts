const config = {
    "tags":{
        "all":"全部",
        "favorite":"收藏",
        "language":"语言/翻译",
        "mind":"发散思维",
        "write":"写作辅助",
        "article":"文章/报告",
        "text":"文本/词语",
        "seo":"SEO",
        "comments":"点评/评鉴",
        "code":"IT/编程",
        "ai":"AI",
        "life":"自助百科",
        "living":"生活质量",
        "interesting":"趣味知识",
        "speech":"辩论/演讲",
        "social":"心理/社交",
        "philosophy":"哲学/宗教",
        "games":"游戏",
        "tool":"工具",
        "interpreter":"终端/解释器",
        "company":"企业职位",
        "doctor":"医生",
        "finance":"金融顾问",
        "music":"音乐",
        "professional":"行业顾问",
        "contribute":"投稿",
        "latest":"最新的",
        "personal":"个人的",
        "pedagogy":"教育/学生",
        "academic":"学术/教师"
    },
    "api":{
        "sms code is invalid":"验证码不正确",
        "Don't submit multi time.":"不要重复提交"
    }
    ,
    "price":"价格",
    "resent after":"重新发送",
    "Show All":"展开",
    "Hide":"缩小",
    "Select a role":"选择想要AI扮演的角色",
    "Code edits API Configuration":"Code API 配置",
    "More":"更多",
    "Enable stream":"开启流式传输",
    "Default Message":"默认消息",
    "Export":"导出聊天记录",
    "Import":"加载聊天记录",
    "Reset":"清空数据",
    "frequency_penalty":"频率惩罚度 (frequency_penalty)",
    "Color Primary":"主题颜色",
    "Choose a conversation style":"选择一个内容生成偏向",
    "Choose a conversation style and role to start":"选择你希望AI扮演的角色和聊天风格",
    "Just Start":"直接开始",
    "Roles management":"角色管理",
    "Tags":"标签",
    "Description":"详细描述",
    "Chat":"会话",
    "Image":"AI 绘画",
    "Config":"配置",
    "Text Language": "文本语言",
    "Base Configuration": "基础配置",
    "Chat API Configuration": "ChatGPT API 配置",
    "Model":"训练模型",
    "Image Size":"图片尺寸",
    "Code Style":"代码风格",
    "New Chat":"新会话",
    "What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both.":
    "使用什么样的temperature，介于0和2之间。更高的值（如0.8）会使输出更随机，而更低的值（例如0.2）会使其更集中和更具确定性。我们通常建议更改此值或top_p，但不能同时更改两者。",
    "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or temperature but not both.":
    "一种替代temperature的方法，称为核采样，其中模型考虑具有top_p概率质量的令牌的结果。因此，0.1意味着只考虑包含前10%概率质量的代币。我们通常建议改变这个或temperature，但不能同时改变。",
    "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.":
    "介于-2.0和2.0之间的数字。正值会根据到目前为止新标记是否出现在文本中来惩罚它们，从而增加模型谈论新主题的可能性。",
    "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.":
    "介于-2.0和2.0之间的数字。到目前为止，正值会根据新标记在文本中的现有频率对其进行惩罚，从而降低模型逐字重复同一行的可能性。",
    "which models work with the Chat API.":"使用哪个模型工作",
    "This is a required field":"这个字段不能为空",
    "Sent":"发送",
    "Type here... (Shift + Enter = Line break)":"输入... (按住Shift + Enter键换行)",
    "Type something to search on ChatGPT":"请提出你的问题或者需求",
    "Type something to generate a image":"输入文本将会生成相应的图片，如果上传一张图片，会生成一张类似的图片",
    "Login":"登录",
    "Cancel":"取消",
    "User Id":"用户名",
    "Password":"密码",
    "Tips":"问题模板",
    "Code":"代码优化",
    "Type your code here":"输入想要优化的代码",
    "Instructions":"你的需求",
    "Type the code and your requirement":"请输入要优化的代码还有你的需求",
    "Are you want to delete the chat.":"你确定要删除这个会话吗",
    "Yes":"是",
    "No":"否",
    "Precise":"准确",
    "Balanced":"平衡",
    "Creative":"创新",
    "Regenerate":"重新生成",
    "presence_penalty":"话题新鲜度 (presence_penalty)",
    "temperature":"随机性 (temperature)",
    "max_tokens":"单次回复限制 (max_tokens)",
    "top_p":"核采样 (top_p)",
    "User name / Phone number":"用户名 / 手机号码",
    "SMS Code":"验证码",
    "Sent SMS code":"发送验证码",
    "Reset Password":"重置密码",
    "Account Login":"账号登录",
    "Sign Up":"注册",
    "Logout":"登出",
    "Logout success":"登出成功",
    "Information":"个人信息",
    "Remember me":"记住密码",
    "Forgot password":"忘记密码？",
    "Re-Password":"确认密码",
    "Phone number":"手机号码",
    "re-input password":"再输入一次密码",
    "input password":"输入密码",
    "Name":"名称",
    "Save":"保存",
    "Use":"使用",
    "Edit":"修改",
    "Add Role":"添加角色",
    "Clear":"清除",
    "API configuration":"配置",
    "Full":"返回全部",
    "Stream":"逐字返回",
    "Style":"风格",
    "Share":"分享",
    "Favorite":"收藏",
    "Remove":"移除",
    "Delete":"删除",
    "Go to Role Management":"角色管理",
    "Are you want to delete the role.":"确定删除这个角色吗",
    "Message":"消息",
    "History":"历史记录",
    "Recent":"最近的",
    "More Details":"更多",
    "topic":"主题",
    "time":"时间",
    "count":"记录数",
    "Share History":"聊天记录分享",
    "Select":"选择要分享的内容",
    "Review":"预览",
    "Export format":"导出格式",
    "Select All":"选择全部",
    "Download":"下载",
    "Share Link":"链接分享",
    "Text":"文本",
    "Page":"页面",
    "Copy the link successlly, The link will expired after 1 day.":"链接已经复制到粘贴板，该链接会在一天后过期.",
    "Return mode":"返回模式",
    "The phone no. is exsiting, please go to login.":"账号已经存在, 请不要重复注册",
    "The two passwords that you entered do not match!":"密码不一致，请重新输入",
    "Updated success":"修改成功",
    "All":"全部",
    "Main":"主要的",
    "Model Name":"模型名称",
    "Input Token Usage":"发送给ChatGPT的信息的Token数",
    "Output Token Usage":"ChatGPT返回信息的Token数",
    "Total":"产生的费用(美金)",
    "Sum":"一共(美金)",
    "Token Usage":"Token的使用情况",
    "User Info":"个人信息",
    "Zoom out":"缩放",
    "Variation":"变换",
    "image":{"Select":"选择"},
    "Select the first image":"选择第1张图片",
    "Select the second image":"选择第2张图片",
    "Select the third image":"选择第3张图片",
    "Select the 4th image":"选择第4张图片",
    "Variation the first image":"基于第1张图片作变化",
    "Variation the second image":"基于第2张图片作变化",
    "Variation the third image":"基于第3张图片作变化",
    "Variation the 4th image":"基于第4张图片作变化",
    "generate the image again":"重新生成新的图片",
    "download":"下载",
    "delete":"删除",
    "Chaos":"混乱",
    "Stylize":"风格化",
    "Quality":"质量",
    "Image model":"图片模型",
    "default":"默认",
    "scenic":"风景",
    "cute":"可爱",
    "expressive":"表现力",
    "Version":"版本",
    "Submit Task":"提交任务",
    "Submit task successlly. you can go to other page first, I will tall you if done":
    "任务提交成功, 你可以先去其他页面等待，图片生成需要大约4分钟。",
    "Image generated successlly":"图片已经生成，你可以去查看它了",
    "Transaction":"翻译",
    "high":"深度调整",
    "low":"微度调整",
    "2x":"2倍",
    "1.5x":"1.5倍",
    "Adjust":"调整",
    "Adjust the image highly":"对图片进行高度调整",
    "Adjust the image lowly":"对图片进行微度调整",
    "Zoom out 2x":"缩放2倍并且自动填充空白，再次生成4张图片",
    "Zoom out 1.5x":"缩放1.5倍并且自动填充空白，再次生成4张图片",
    "Reference image":"参考图片",
    "Reference image weight":"参考图权重",
    "Value range: 0-100, - Chaos, or - c Chaos level, which can be understood as a space that allows AI to roam freely The smaller the value, the more reliable it is, with a default of 0 being the most accurate":
    "取值范围：0-100、 --chaos 或 --c 混乱级别，可以理解为让AI天马行空的空间 值越小越可靠、默认0最为精准",
    "Upload an image and make modifications based on it"
    :"上传一张图片, 然后基于这张图片做修改",
    "In reference to the weight of the reference image, the higher the value, the greater the significance of the reference image."
    :"参考图权重，值越大，参考图的权重越大",
    "Click or drag file to this area to upload":"点击或拖拽一个图片到这里作为输入支持PNG和JPG格式",
    "Painting Square":"绘画广场",
    "Image generated failure.":"图片生成失败",
    "search by prompt":"prompt关键词搜索",
    "Copy prompt successlly":"复制prompt成功",
    "copy prompt":"复制提示词",
    "SparkDesk 1.5":"讯飞星火 1.5",
    "SparkDesk 2.0":"讯飞星火 2.0",
    "spark-desk-1.5":"讯飞星火 1.5",
    "spark-desk-2":"讯飞星火 2.0",
    "ernie-bot":"文心一言",
    "ernie-bot-turbo":"文心一言 (turbo)",
    "qwen-v1":"通义千问",
    "qwen-plus-v1":"通义千问 plus",
    "got a unknow exception. please re-try":"未知异常,请尝试重新生成",
    "Raw":"摄影化",
    "Composition":"构图"
}
export default config;