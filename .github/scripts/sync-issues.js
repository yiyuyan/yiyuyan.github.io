const labels = (process.env.ISSUE_LABELS || "")
    .split(",")
    .map(x => x.trim());

const isPost = labels.includes("post");