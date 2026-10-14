# 運用ガイド（オーナー向け）

## 収益の流れ

```
Google検索 / Facebookグループ / Reddit (r/okinawa 等)
        ▼
ガイド記事（英語・在沖米軍家族向け）
        ▼ /go/<slug> リンク（Netlifyで302リダイレクト）
Amazon.co.jp / Klook / Agoda / Airalo / Wise  →  購入・予約で報酬
```

- 記事内のリンクはすべて `/go/<slug>`。**ID・リンク先は `affiliates.json` だけで管理**（HTML編集不要）。
- ID未設定でも通常ページに飛ぶので、審査前に公開してOK。
- GA4を設定すると `affiliate_click` イベントで、どのリンクが押されたか分かる。

## やることリスト（この順番が最短）

### 1. 公開する（〜30分）
1. Netlify → **Add new site → Import an existing project** → このリポジトリを選択
   （Build command / Publish directory は `netlify.toml` から自動設定）
2. 独自ドメインを取得して設定（例: okinawaoffbaseguide.com、年1,500〜2,000円程度）。
   ドメインが決まったら教えてください → サイト内の仮ドメインを一括置換します。
3. `about.html` の `[your first name]` と `[X] years` を埋める（審査で「運営者が実在する」ことが見られます）。

### 2. アフィリエイト登録（公開URLが必要）
| # | プログラム | 登録先 | 設定場所 | 備考 |
|---|---|---|---|---|
| 1 | Amazonアソシエイト（日本） | https://affiliate.amazon.co.jp/ | `programs.amazon_jp.id`（`xxxx-22`） | 即日ID発行。**180日以内に3件売上**で本審査 |
| 2 | Wise 招待リンク | https://wise.com/invite | `links.wise.override` に招待URL全体 | Wiseアカウントがあれば即日 |
| 3 | Klook | https://affiliate.klook.com/ | `programs.klook.id`（aid） | 承認後、慶良間・青の洞窟・ホエールウォッチングのディープリンクを作成し `todo` 付きリンクの `url` を差し替え |
| 4 | Agoda Partners | https://partners.agoda.com/ | `programs.agoda.id`（cid） | 北谷・恩納・那覇のエリアURLが作れたら差し替え |
| 5 | Airalo | https://www.airalo.com/affiliate-partners | `links.airalo-japan.override` | Impact経由 |

IDはClaudeに送ってもらえれば反映します（自分で編集する場合は `affiliates.json` を書き換えてpushするだけ）。

### 3. 計測（GA4・無料）
1. https://analytics.google.com/ でプロパティ作成 → ウェブストリームにドメインを登録
2. 表示される **測定ID（G-XXXXXXXXXX）** を `js/main.js` の `GA_MEASUREMENT_ID` に入れる（またはClaudeに送る）
3. https://search.google.com/search-console でドメイン登録 → `sitemap.xml` を送信

### 4. 集客（最初の売上を早く出すコツ）
- 沖縄の米軍関係者向けFacebookグループ（PCS / spouses / buy-sell系）やReddit r/okinawa で、質問への回答として記事を紹介（各グループのルールを確認。宣伝禁止の所も多い）
- 記事を増やすほど検索流入が増える。次の候補: 台風準備チェックリスト、子連れビーチ、雨の日の過ごし方、PCS時の荷物で持ってくるべき物

## 法令・規約メモ
- ステマ規制（景品表示法）対応: 記事冒頭に「PR」表記＋開示ページ。
- Amazon必須文言（As an Amazon Associate, I earn from qualifying purchases.）は開示ページに記載済み。
- 参加していないプログラムは `affiliate-disclosure.html` の一覧から削除すること。
