/**
 * 歌枠データベース v3.2 ヘルプ＆取扱説明書データ
 * marked.js 用 Markdown ソースコード（スムーズスクロール対応・インタラクティブUI目次版）
 */
const config = `
<div class="help-hero">
    <div class="help-hero-icon"><i class="fa-solid fa-book-open text-white"></i></div>
    <div>
        <div class="help-hero-title">歌枠データベース v1.0.1 マニュアル</div>
        <div class="help-hero-text">歌枠アーカイブの保存、タイムスタンプ連動再生、楽曲・アーティストの一括管理、バックアップやクラウド共有を行うための総合ガイドです。</div>
    </div>
</div>

<div class="help-grid">
    <div class="help-card">
        <div class="help-card-icon"><i class="fa-solid fa-circle-play text-slate-300"></i></div>
        <b>歌枠の試聴・自動追従再生</b>
        <span>YouTube再生に合わせてタイムスタンプが自動ハイライト。シアターモードで拡大視聴も可能。</span>
    </div>
    <div class="help-card">
        <div class="help-card-icon"><i class="fa-solid fa-wand-magic-sparkles text-slate-300"></i></div>
        <b>タイムスタンプ一括解析</b>
        <span>YouTubeの概要欄やコメントから「01:23 曲名 / 歌手名」を貼り付けるだけで自動抽出・一括登録。</span>
    </div>
    <div class="help-card">
        <div class="help-card-icon"><i class="fa-solid fa-layer-group text-slate-300"></i></div>
        <b>自動データベース構築</b>
        <span>歌唱された楽曲や原曲アーティスト、配信者・歌唱者を独立したマスターデータとして自動集計。</span>
    </div>
    <div class="help-card">
        <div class="help-card-icon"><i class="fa-solid fa-cloud-arrow-up text-slate-300"></i></div>
        <b>クラウド連携 & 柔軟な共有</b>
        <span>.uwpファイル保存、Gist短縮URL共有、GitHub連携機能により複数デバイスでのデータ同期に対応。</span>
    </div>
</div>

<!-- クイック目次ナビゲーションパネル -->
<div class="my-6 p-4 md:p-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl shadow-inner backdrop-blur-sm">
    <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/60 text-indigo-400 font-bold text-base">
        <i class="fa-solid fa-list-ul"></i>
        <span>目次ナビゲーション（クリックで対象セクションへ移動）</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-1')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2">
                <i class="fa-solid fa-compass text-indigo-400 text-xs"></i> 1. 概要と画面構成
            </a>
        </div>
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-2')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-circle-play text-indigo-400 text-xs"></i> 2. 歌枠一覧と動画再生
            </a>
            <div class="ml-5 flex flex-col gap-1 text-xs text-slate-400">
                <a href="javascript:void(0)" onclick="document.getElementById('sec-2-1')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 2.1 閲覧・検索・並び替え</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-2-2')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 2.2 新しい歌枠の登録手順</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-2-3')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 2.3 楽曲・タイムスタンプ追加</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-2-4')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 2.4 動画再生・自動追従</a>
            </div>
        </div>
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-3')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-database text-indigo-400 text-xs"></i> 3. データ管理（マスター）
            </a>
            <div class="ml-5 flex flex-col gap-1 text-xs text-slate-400">
                <a href="javascript:void(0)" onclick="document.getElementById('sec-3-1')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 3.1 楽曲一覧</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-3-2')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 3.2 アーティスト一覧</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-3-3')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 3.3 チャンネル一覧</a>
            </div>
        </div>
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-4')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2 mb-1.5">
                <i class="fa-solid fa-cloud-arrow-up text-indigo-400 text-xs"></i> 4. バックアップ・復元・共有
            </a>
            <div class="ml-5 flex flex-col gap-1 text-xs text-slate-400">
                <a href="javascript:void(0)" onclick="document.getElementById('sec-4-1')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 4.1 .uwp バックアップ</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-4-2')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 4.2 Gist 短縮URL共有</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-4-3')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 4.3 GitHub クラウド同期</a>
                <a href="javascript:void(0)" onclick="document.getElementById('sec-4-4')?.scrollIntoView({behavior:'smooth'})" class="hover:text-indigo-300">└ 4.4 データの初期化</a>
            </div>
        </div>
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-5')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2">
                <i class="fa-solid fa-circle-question text-indigo-400 text-xs"></i> 5. よくある質問 (FAQ)
            </a>
        </div>
        <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 hover:border-indigo-500/60 transition-all">
            <a href="javascript:void(0)" onclick="document.getElementById('sec-6')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400 flex items-center gap-2">
                <i class="fa-solid fa-clock-rotate-left text-indigo-400 text-xs"></i> 6. バージョン変更履歴
            </a>
        </div>
    </div>
</div>

---

<h2 id="sec-1" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-compass text-indigo-400"></i> 1. 概要と画面構成
</h2>

**歌枠データベース**は、VTuberや配信者の歌枠（歌唱配信）のアーカイブ、セットリスト、タイムスタンプを効率的に記録・管理・視聴するためのWebアプリケーションです。

<img src="images/manual_overview.png" alt="歌枠データベースの画面構成" class="help-image">

### データ構造の特徴
本ツールでは入力された情報から以下のデータが相互にリンクして自動管理されます：
- **歌枠 (Stream)**: 配信タイトル、配信日、YouTube URL、サムネイル、配信チャンネル情報
- **楽曲マスター (Master Song)**: 楽曲名と原曲アーティスト情報の組み合わせ
- **アーティスト (Singer)**: 原曲の歌手・コンポーザー情報
- **チャンネル/配信者 (Streamer)**: 歌枠の配信元や、各楽曲の歌唱者（ボーカル）

---

<h2 id="sec-2" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-circle-play text-indigo-400"></i> 2. 歌枠一覧と動画再生（メイン機能）
</h2>

ナビゲーションバーの **「歌枠一覧」** タブでは、登録済みの歌枠カードの閲覧、条件検索、動画再生、および新規歌枠の追加が行えます。

<img src="images/manual_stream_tab.png" alt="歌枠一覧画面" class="help-image">

<h3 id="sec-2-1" class="text-lg font-semibold mt-6 mb-3 text-slate-200">2.1 歌枠の閲覧・検索・並び替え</h3>

上部のコントロールバーを使用して、登録済みの歌枠を絞り込むことができます。

- **表示件数の確認**: 現在の検索条件に一致する歌枠数および総歌唱曲数がリアルタイム表示されます。
- **並び替え dropdown**:
  - \`配信日 (新しい順)\`: 配信日時が新しい順に表示します。
  - \`配信日 (古い順)\`: 配信日時が古い順に表示します。
  - \`登録日 (新しい順)\`: データベースに登録した日時が新しい順に表示します。
- **配信者フィルター**: 特定のチャンネル・配信者のみで絞り込みます。
- **キーワード検索**: 歌枠タイトル、楽曲名、原曲アーティスト名、歌唱者名から部分一致で瞬時に検索します。

---

<h3 id="sec-2-2" class="text-lg font-semibold mt-6 mb-3 text-slate-200">2.2 新しい歌枠の登録手順</h3>

1. コントロールバー左上の **「新しい動画を追加」** ボタンをクリックします。
2. モーダルが開いたら、**YouTube動画URL**（または11桁の動画ID）を入力します。

<img src="images/manual_add_stream_modal.png" alt="歌枠登録モーダル" class="help-image">

3. **タイトル自動取得**: URL入力後、右側の \`タイトル自動取得\` ボタンを押すと、YouTubeから動画タイトル（および配信者名）が自動入力されます。
4. **配信元チャンネルの選択**:
   - 既存の登録メンバーから配信者を選択するか、新規配信者名を入力します。
   - アイコン画像URLやアカウントID（\`@handle\`）も設定可能です。
5. **配信日の指定**: 配信が行われた日付を選択します。
6. **カスタムサムネイル (任意)**: 自動取得される標準サムネイル以外の画像を使用したい場合に入力します。

---

<h3 id="sec-2-3" class="text-lg font-semibold mt-6 mb-3 text-slate-200">2.3 楽曲・タイムスタンプの追加方法</h3>

歌枠登録モーダルの「楽曲・タイムスタンプ一覧」セクションにある **「曲・タイムスタンプを追加」** ボタンを押すと、タイムスタンプ入力用のサブモーダルが開きます。

#### 手動で1曲ずつ入力する
「1曲ずつ入力」タブでは、個別に楽曲を登録できます。

<img src="images/manual_add_song_single.png" alt="1曲ずつ入力画面" class="help-image">

1. **登録済みの曲から選ぶ (任意)**: 過去に登録した楽曲マスターから選択すると、楽曲名とアーティスト名が自動補完されます。
2. **タイムスタンプ**: \`01:23\`（分:秒）または \`01:23:45\`（時:分:秒）の形式で入力します。
3. **楽曲名・アーティスト名**: それぞれ入力します。
4. **歌唱者の指定**: コラボ配信などで配信者以外のメンバーが歌った場合、\`指定\` ボタンを押して歌唱メンバーを個別に設定できます。
5. **「リストに追加」** を押すと、下の追加予定リストに入ります。

#### テキストから一括解析・一括登録する
YouTubeの概要欄やコメント欄に記載されているセットリストテキストをコピペして、一括で解析・登録することができます。

<img src="images/manual_add_song_batch.png" alt="テキスト一括解析画面" class="help-image">

1. 「テキストから一括追加」タブに切り替えます。
2. テキストエリアにタイムスタンプ付きの歌唱リストを貼り付けます。
   
   **対応テキスト形式の例:**
   \`\`\`text
   01:23 ドライフラワー / 優里
   05:30 残響散歌 - Aimer
   1:02:15 アイドル / YOASOBI (歌: さくら歌乃)
   \`\`\`
3. **「テキストを解析して追加」** ボタンを押すと、正規表現エンジンが「タイムスタンプ」「楽曲名」「アーティスト名」を自動抽出してリストに変換します。
4. 内容を確認し、**「歌枠登録リストに反映」** をクリックすると本登録されます。

<div class="help-note">
    <i class="fa-solid fa-lightbulb text-amber-400 mr-1"></i> <b>ポイント:</b> タイムスタンプ入力後、歌枠モーダル下の「保存する」ボタンを押すことでデータベースに反映されます。
</div>

---

<h3 id="sec-2-4" class="text-lg font-semibold mt-6 mb-3 text-slate-200">2.4 動画プレイヤーとタイムスタンプ連動</h3>

歌枠カードの **「再生」** ボタンまたはサムネイル画像をクリックすると、上部に埋め込み動画プレイヤーが展開されます。

<img src="images/manual_player_section.png" alt="プレイヤーと自動追従機能" class="help-image">

- **自動ジャンプ再生**: 右側のタイムスタンプ一覧から曲名をクリックすると、動画の該当秒数へ直接ジャンプします。
- **タイムスタンプ自動追従**: 動画再生中、現在の再生時間に合わせた楽曲が自動的にハイライト（パルス発光）されます。
- **シアターモード (拡大)**: プレイヤー右上の \`シアターモード(拡大)\` ボタンを押すと、動画プレイヤーを大画面表示に変更できます。

---

<h2 id="sec-3" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-database text-indigo-400"></i> 3. データ管理（マスターデータ管理）
</h2>

ナビゲーションバーの **「データ管理」** タブでは、歌枠登録時に自動蓄積された「楽曲」「アーティスト」「チャンネル」のマスターデータを横断的に閲覧・編集できます。

<img src="images/manual_data_tab.png" alt="データ管理タブ" class="help-image">

<h3 id="sec-3-1" class="text-lg font-semibold mt-6 mb-3 text-slate-200">3.1 楽曲一覧サブタブ</h3>
登録されている全楽曲のデータベースです。

- **集計表示**: 各楽曲の「総歌唱回数」や、どの歌枠の何分何秒で歌われたかの全履歴一覧を確認できます。
- **並び替え**: 楽曲名順 (五十音)、歌唱回数順 (多い順)、アーティスト名順、最新歌唱日順に切り替え可能。
- **情報の編集**: 楽曲右側の \`編集\` ボタンから、表記揺れのある楽曲名やアーティスト名を一括修整できます（修正内容は該当するすべての歌枠データに即座に反映されます）。

<h3 id="sec-3-2" class="text-lg font-semibold mt-6 mb-3 text-slate-200">3.2 アーティスト一覧サブタブ</h3>
原曲歌手・作詞作曲者ごとのデータベースです。

- **レパートリー集計**: そのアーティストの持ち歌が何曲登録されているか（レパートリー数）、および総歌唱回数を一目で把握できます。
- **アーティスト名の変更**: \`編集\` ボタンからアーティスト名を変更すると、紐付いている全楽曲のデータが一括更新されます。

<h3 id="sec-3-3" class="text-lg font-semibold mt-6 mb-3 text-slate-200">3.3 チャンネル一覧サブタブ</h3>
配信者および歌唱メンバーのマスター情報を管理します。

- **新規登録**: \`新しいチャンネルを登録\` ボタンから新しい配信者を作成できます。
- **プロフィールの編集**: アカウント表示名、ID / @ハンドル名、アイコン画像URLを設定・更新できます。アイコン画像を設定すると、各カードやタイムスタンプ上に丸型アバターアイコンが表示されます。

---

<h2 id="sec-4" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-cloud-arrow-up text-indigo-400"></i> 4. バックアップ・復元・共有
</h2>

「バックアップ / 復元」タブでは、大切なデータの保存や別デバイスへの移行、他者への共有が行えます。

<img src="images/manual_backup_tab.png" alt="バックアップ・復元タブ" class="help-image">

<h3 id="sec-4-1" class="text-lg font-semibold mt-6 mb-3 text-slate-200">4.1 .uwpファイルによるバックアップと復元</h3>

本ツールは独自のプロプライエタリ圧縮アーカイブ形式 **\`.uwp\`**（ZIP標準準拠）を採用しています。

- **エクスポート**: \`バックアップ (.uwp) をダウンロード\` をクリックすると、\`YYYYMMDD_HHMMSS_utawakudb.uwp\` というファイル名でローカルPCに保存されます。
- **インポート（復元）**: \`.uwp ファイルを指定して復元\` ボタンから過去のバックアップファイルを選択します。
- **旧バージョン自動互換変換**: v1 / v2 などの旧データ構造や互換ファイルを読み込んだ場合でも、最新のv3スキーマ構造へ自動的にデータ移行（マイグレーション）が行われます。

---

<h3 id="sec-4-2" class="text-lg font-semibold mt-6 mb-3 text-slate-200">4.2 Gistによる短縮URL共有</h3>

ログイン不要で、第三者に自分の歌枠データベースを閲覧・読み込みさせることができます。

1. **「共有URLを発行してコピー」** ボタンをクリックします。
2. GitHub Gist APIを介してデータがオンライン上にアップロードされ、専用のデータ共有URLがクリップボードにコピーされます。
3. 受信者はそのURLを開くだけで、同じデータベース状態を瞬時に再現・読込できます。

---

<h3 id="sec-4-3" class="text-lg font-semibold mt-6 mb-3 text-slate-200">4.3 GitHubクラウド保存・読み込み</h3>

GitHubアカウントの個人アクセストークン (PAT) を利用して、Private/Publicリポジトリに直接データを自動同期・クラウド保存できます。

<img src="images/manual_github_settings.png" alt="GitHub連携設定" class="help-image">

#### 設定項目:
- **オーナー名**: GitHubのユーザー名（例: \`octocat\`）
- **リポジトリ名**: 保存先のリポジトリ（例: \`utawaku-data\`）
- **保存ファイルパス**: リポジトリ内のパス（例: \`utawakudb.uwp\`）
- **Personal Access Token (PAT)**: GitHubの設定画面から発行したトークンを入力します（権限: \`repo\` または \`Contents Read/Write\`）。

#### 操作:
- **GitHubへ保存**: 現在の全データをクラウド上のリポジトリに \`.uwp\` 形式で直接コミット保存します。
- **GitHubから読込**: クラウド上の最新バックアップを取得してローカルデータを更新します。

<div class="help-note">
    <i class="fa-solid fa-shield-halved text-blue-400 mr-1"></i> <b>セキュリティ注意:</b> 入力されたアクセストークンは外部サーバーへ送られることはなく、お使いのブラウザ内 (LocalStorage) のみに安全に保持されます。
</div>

---

<h3 id="sec-4-4" class="text-lg font-semibold mt-6 mb-3 text-slate-200">4.4 データの初期化</h3>

登録データをすべて消去して初期状態に戻す場合は、\`データを完全に初期化する\` をクリックします。確認ダイアログが表示された後、安全にリセットされます。

---

<h2 id="sec-5" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-circle-question text-indigo-400"></i> 5. よくある質問 (FAQ) & トラブルシューティング
</h2>

#### Q1. 動画タイトルやサムネイルが自動取得できません。
- **原因**: 該当動画が非公開・限定公開・削除されているか、YouTube APIの応答制限の可能性があります。
- **対処法**: 手動でタイトルおよびカスタムサムネイルURLを入力してください。

#### Q2. 概要欄テキストの一括解析で一部の曲が読み込めません。
- **原因**: タイムスタンプのフォーマットが特殊な可能性があります。
- **対処法**: \`01:23 曲名 / 歌手名\` や \`01:23:45 曲名 - 歌手名\` のように、「時間」「曲名」「歌手名」をスラッシュ \`/\` や ハイフン \`-\` で区切る形式にテキストを整形してから解析ボタンを押してください。

#### Q3. ブラウザのキャッシュを消去するとデータは消えますか？
- **回答**: はい。デフォルトデータはブラウザの LocalStorage に保存されているため、定期的に **「.uwp バックアップのダウンロード」** または **「GitHub保存」** を行うことを強く推奨します。

---

<h2 id="sec-6" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-slate-100">
    <i class="fa-solid fa-clock-rotate-left text-indigo-400"></i> 6. バージョン変更履歴 (Changelog)
</h2>

歌枠データベースのリリースおよびアップデート履歴です。

### v1.0.1 (2026-10-03)
- **改良**: セキュリティ面の向上。
- **修正**: アプリない文章の一部修正・変更。

### v1.0.0 (2026-09-28)
- **初期リリース**: 歌枠データベース v1.0 を公開。
- **コア機能**: YouTube動画URLからのタイトル自動取得、およびタイムスタンプに合わせた動画プレイヤーの自動ジャンプ・追従再生機能を実装。
- **一括登録機能**: 概要欄等のテキストから「時間」「楽曲名」「アーティスト名」を自動抽出するテキスト解析エンジンを搭載。
- **データベース管理**: 楽曲、原曲アーティスト、チャンネル（配信者・歌唱者）のマスターデータを横断的に閲覧・一括編集できるデータ管理タブを実装。
- **バックアップ・共有**: 独自アーカイブ形式 \`.uwp\` によるローカルバックアップ・復元機能、および GitHub PAT・Gist API を利用したクラウドデータ同期・共有機能を実装。

---

<div class="text-center text-xs text-gray-400 my-4">
    歌枠データベース v1.0.1 — Designed for VTuber & Singing Stream Fans
</div>
`;
