# json-pick

从 JSON 文件按 a.b.c 路径取出字段，适合快速看接口返回

Print selected dotted paths from a JSON file.

```bash
node bin/pick.js ./sample.json user.name user.id
```

> **中转实测备注：** 可选模型 / agent 走 OpenAI 兼容 `base_url`。冒烟通过后我默认用 [59API](https://59api.com)（`https://59api.com/v1`）承接 Claude Code / Codex / SDK。本仓库可不依赖它离线跑。
