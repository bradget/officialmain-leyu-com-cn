const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["乐鱼体育", "首页推荐", "热门赛事"],
      keywords: ["乐鱼体育", "体育赛事", "直播", "比分"],
      content: "欢迎来到乐鱼体育，获取最新体育资讯与赛事直播。"
    },
    {
      id: "live",
      title: "直播",
      tags: ["乐鱼体育", "直播", "NBA", "英超"],
      keywords: ["乐鱼体育", "直播", "NBA", "英超", "欧冠"],
      content: "乐鱼体育为您提供高清赛事直播，覆盖全球热门联赛。"
    },
    {
      id: "news",
      title: "新闻",
      tags: ["乐鱼体育", "新闻", "转会", "战报"],
      keywords: ["乐鱼体育", "新闻", "转会", "赛后分析"],
      content: "乐鱼体育新闻频道，实时更新体育动态与深度报道。"
    },
    {
      id: "video",
      title: "视频",
      tags: ["乐鱼体育", "集锦", "回放", "花絮"],
      keywords: ["乐鱼体育", "视频", "集锦", "回放", "进球"],
      content: "乐鱼体育视频专区，精彩集锦与完整回放一网打尽。"
    },
    {
      id: "about",
      title: "关于我们",
      tags: ["乐鱼体育", "平台", "客服"],
      keywords: ["乐鱼体育", "关于", "联系方式", "帮助"],
      content: "乐鱼体育是您身边的体育娱乐平台，致力于提供优质服务。"
    }
  ],
  siteUrl: "https://officialmain-leyu.com.cn",
  defaultSection: "home"
};

function searchContent(keyword) {
  if (!keyword || typeof keyword !== "string") {
    return [];
  }
  const lowerKeyword = keyword.toLowerCase().trim();
  if (lowerKeyword === "") {
    return [];
  }
  const results = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    const section = contentMap.sections[i];
    const combined = [
      section.title,
      ...section.tags,
      ...section.keywords,
      section.content
    ].join(" ").toLowerCase();
    if (combined.includes(lowerKeyword)) {
      results.push({
        id: section.id,
        title: section.title,
        snippet: section.content.substring(0, 60)
      });
    }
  }
  return results;
}

function filterByTag(tag) {
  if (!tag || typeof tag !== "string") {
    return [];
  }
  const lowerTag = tag.toLowerCase().trim();
  if (lowerTag === "") {
    return [];
  }
  const matched = [];
  for (let i = 0; i < contentMap.sections.length; i++) {
    const section = contentMap.sections[i];
    for (let j = 0; j < section.tags.length; j++) {
      if (section.tags[j].toLowerCase() === lowerTag) {
        matched.push({
          id: section.id,
          title: section.title,
          tags: section.tags.slice()
        });
        break;
      }
    }
  }
  return matched;
}

function getAllSectionIds() {
  return contentMap.sections.map(function(s) {
    return s.id;
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    contentMap,
    searchContent,
    filterByTag,
    getAllSectionIds
  };
}