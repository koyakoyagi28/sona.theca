/**
 * SonA'Theca v2.1.0 ヘルプ＆取扱説明書データ
 * marked.js で表示する Markdown / HTML ソース
 */
const config = `
<div class="help-hero">
  <div class="help-hero-icon"><i class="fa-solid fa-book-open text-white"></i></div>
  <div>
    <div class="help-hero-title">SonA'Theca v2.1.0 マニュアル</div>
    <div class="help-hero-text">歌唱動画・楽曲・アーティスト・チャンネルをまとめて管理し、タイムスタンプから動画を再生するためのガイドです。</div>
  </div>
</div>

<div class="help-grid">
  <div class="help-card">
    <div class="help-card-icon"><i class="fa-solid fa-circle-play text-slate-300"></i></div>
    <b>動画の検索・再生</b>
    <span>登録した動画を検索・絞り込み、曲ごとのタイムスタンプから該当箇所を再生できます。</span>
  </div>
  <div class="help-card">
    <div class="help-card-icon"><i class="fa-solid fa-music text-slate-300"></i></div>
    <b>楽曲と歌唱履歴の管理</b>
    <span>楽曲ごとの歌唱回数や、歌われた動画・タイムスタンプをまとめて確認できます。</span>
  </div>
  <div class="help-card">
    <div class="help-card-icon"><i class="fa-solid fa-tags text-slate-300"></i></div>
    <b>タグによる分類</b>
    <span>動画や楽曲にタグを付け、一覧のフィルターから目的のデータを探せます。</span>
  </div>
  <div class="help-card">
    <div class="help-card-icon"><i class="fa-solid fa-box-archive text-slate-300"></i></div>
    <b>バックアップ・共有</b>
    <span>.uwp形式での保存・復元、共有URLの発行、GitHubリポジトリへの保存に対応しています。</span>
  </div>
</div>

<div class="my-6 p-4 md:p-5 bg-slate-800/80 border border-slate-700/80 rounded-2xl">
  <div class="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/60 text-indigo-400 font-bold text-base">
    <i class="fa-solid fa-list-ul"></i><span>目次（クリックで移動）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-1')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">1. SonA'Thecaについて</a>
    </div>
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-2')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">2. 動画一覧</a>
      <div class="ml-4 mt-2 flex flex-col gap-1 text-xs text-slate-400">
        <a href="javascript:void(0)" onclick="document.getElementById('sec-2-1')?.scrollIntoView({behavior:'smooth'})">2.1 検索・並び替え・フィルター</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-2-2')?.scrollIntoView({behavior:'smooth'})">2.2 動画の登録・編集</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-2-3')?.scrollIntoView({behavior:'smooth'})">2.3 楽曲・タイムスタンプの登録</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-2-4')?.scrollIntoView({behavior:'smooth'})">2.4 動画の再生</a>
      </div>
    </div>
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-3')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">3. データ管理</a>
      <div class="ml-4 mt-2 flex flex-col gap-1 text-xs text-slate-400">
        <a href="javascript:void(0)" onclick="document.getElementById('sec-3-1')?.scrollIntoView({behavior:'smooth'})">3.1 楽曲一覧</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-3-2')?.scrollIntoView({behavior:'smooth'})">3.2 アーティスト一覧</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-3-3')?.scrollIntoView({behavior:'smooth'})">3.3 チャンネル一覧</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-3-4')?.scrollIntoView({behavior:'smooth'})">3.4 タグ管理</a>
      </div>
    </div>
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-4')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">4. バックアップ・復元・共有</a>
      <div class="ml-4 mt-2 flex flex-col gap-1 text-xs text-slate-400">
        <a href="javascript:void(0)" onclick="document.getElementById('sec-4-1')?.scrollIntoView({behavior:'smooth'})">4.1 .uwpファイル</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-4-2')?.scrollIntoView({behavior:'smooth'})">4.2 共有URL</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-4-3')?.scrollIntoView({behavior:'smooth'})">4.3 GitHub連携</a>
        <a href="javascript:void(0)" onclick="document.getElementById('sec-4-4')?.scrollIntoView({behavior:'smooth'})">4.4 データの初期化</a>
      </div>
    </div>
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-5')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">5. よくある質問</a>
    </div>
    <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50">
      <a href="javascript:void(0)" onclick="document.getElementById('sec-6')?.scrollIntoView({behavior:'smooth'})" class="font-semibold text-slate-200 hover:text-indigo-400">6. バージョン変更履歴</a>
    </div>
  </div>
</div>

<h2 id="sec-1" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">1. SonA'Thecaについて</h2>

**SonA'Theca** は、歌ってみた動画や歌唱配信などの動画情報と、動画内で歌われた楽曲・タイムスタンプを整理して管理するためのWebアプリです。動画単位で情報を登録するだけでなく、楽曲や原曲アーティスト、チャンネルを一覧から横断的に確認できます。

### 主なデータ
- **動画**：タイトル、YouTube動画URL、配信日、チャンネル、サムネイル、タグ、楽曲・タイムスタンプなど。
- **楽曲**：楽曲名と原曲アーティストの組み合わせ。動画内の歌唱履歴と関連付けられます。
- **アーティスト**：楽曲に紐づく原曲アーティスト情報。
- **チャンネル**：動画の配信元や、楽曲の歌唱者として指定するアカウント情報。
- **タグ**：動画や楽曲を分類・検索するためのラベル。

### 基本的な使い方
1. 「動画一覧」で動画を登録します。
2. 動画に楽曲とタイムスタンプを登録し、保存します。
3. 動画一覧から検索・絞り込み、または「データ管理」で楽曲や歌唱履歴を探します。
4. 定期的に「バックアップ / 復元」からデータを保存します。

<div class="help-note"><b>大切な注意：</b> ブラウザ内に保存しているデータは、端末やブラウザの変更、サイトデータの削除などで利用できなくなる場合があります。大切なデータは定期的に .uwp ファイルへバックアップしてください。</div>

<h2 id="sec-2" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">2. 動画一覧</h2>

「動画一覧」は、登録済み動画の閲覧・検索・再生と、新しい動画の登録を行うメイン画面です。

<h3 id="sec-2-1" class="text-lg font-semibold mt-6 mb-3">2.1 検索・並び替え・フィルター</h3>

- **キーワード検索**：動画タイトル、楽曲名、アーティスト名、チャンネル名などを入力して絞り込みます。入力内容を消すと検索を解除できます。
- **並び替え**：配信日（新しい順／古い順）や登録日（新しい順）など、画面の並び替えメニューから表示順を切り替えます。
- **フィルター**：「フィルタ」ボタンからチャンネル、楽曲、タグなどの条件を指定します。適用中の条件がある場合はボタン付近に件数が表示されます。
- **タグ条件**：タグの一致方法を選べる場合は、いずれかのタグに一致する動画を探すか、指定したタグすべてを持つ動画を探すかを切り替えます。
- **表示件数**：検索・フィルターに一致した動画や楽曲の件数が表示されます。

検索とフィルターは組み合わせて利用できます。目的の動画が表示されない場合は、検索語を短くするか、適用中のフィルターを解除して確認してください。

<h3 id="sec-2-2" class="text-lg font-semibold mt-6 mb-3">2.2 動画の登録・編集</h3>

1. 「新しい動画」をクリックします。
2. YouTube動画のURLまたは動画IDを入力します。
3. 「動画タイトルを取得」を使うと、取得可能な場合は動画タイトルなどが入力されます。取得できない場合は、タイトルを手動で入力してください。
4. チャンネル、日付、必要に応じてサムネイルやタグなどの情報を設定します。
5. 「楽曲・タイムスタンプを追加」から動画内の楽曲を登録します。
6. 入力内容を確認し、モーダル内の保存操作で登録を完了します。

登録済み動画は、動画一覧の編集操作から情報を修正できます。タイトルやURLなどを変更した場合は、保存後に一覧の表示内容を確認してください。

<h3 id="sec-2-3" class="text-lg font-semibold mt-6 mb-3">2.3 楽曲・タイムスタンプの登録</h3>

「楽曲・タイムスタンプを追加」をクリックすると、楽曲を登録する画面が開きます。1曲ずつ入力する方法と、テキストからまとめて追加する方法があります。

#### 1曲ずつ入力する
1. 必要に応じて「曲名・アーティスト名で検索して選択」から既存の楽曲を検索して選びます。既存曲を選択すると、登録済みの楽曲情報を利用できます。
2. **タイムスタンプ**を入力します。例：\`01:23\` または \`1:02:15\`。
3. 楽曲名とアーティスト名を確認・入力します。
4. 配信者以外が歌唱している場合などは、「選択」から歌唱者を指定します。
5. 「リストに追加」を押し、追加予定リストに入れます。
6. 必要な曲を追加したら、追加予定リストの内容を確認し、動画の登録画面へ反映します。
7. 最後に動画の保存操作を行い、変更を確定します。

#### テキストから一括追加する
YouTubeの概要欄やコメント欄にあるセットリストを貼り付け、タイムスタンプや楽曲情報をまとめて抽出できます。

例：
\`\`\`text
01:23 ドライフラワー / 優里
05:30 残響散歌 - Aimer
1:02:15 アイドル / YOASOBI
\`\`\`

1. 「テキストから一括追加」タブを開きます。
2. セットリストのテキストを入力欄に貼り付けます。
3. 「テキストを解析して追加」を押します。
4. 解析結果を確認し、楽曲名・アーティスト名・タイムスタンプが正しく分かれているか確認します。
5. 追加予定リストへ反映し、動画の登録画面に戻ります。
6. 動画の保存操作を行って登録を確定します。

区切り方が特殊なテキストは正しく解析されないことがあります。その場合は、時間・楽曲名・アーティスト名が分かる形に整えてから再度解析するか、1曲ずつ入力してください。

<h3 id="sec-2-4" class="text-lg font-semibold mt-6 mb-3">2.4 動画の再生</h3>

1. 動画のサムネイルまたは再生操作をクリックします。
2. 動画プレイヤーが表示されたら、タイムスタンプ一覧から聴きたい曲を選びます。
3. 選んだ曲の開始位置へ動画が移動します。
4. 再生中は、現在の再生位置に対応するタイムスタンプが自動的に強調表示されます。
5. プレイヤーの「シアターモード」を使うと、動画を大きく表示できます。「閉じる」でプレイヤーを終了します。

タイムスタンプは動画内の開始位置を示します。登録した時刻が実際の歌唱開始と異なる場合は、動画情報を編集して修正してください。

<h2 id="sec-3" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">3. データ管理</h2>

「データ管理」では、動画に登録された楽曲・アーティスト・チャンネルの情報を一覧で確認・編集できます。カテゴリを切り替えて、検索や並び替えを利用してください。

<h3 id="sec-3-1" class="text-lg font-semibold mt-6 mb-3">3.1 楽曲一覧</h3>

- **検索**：楽曲名、アーティスト名、関連するチャンネルなどから楽曲を探します。
- **並び替え**：楽曲名、歌唱回数、アーティスト名、歌唱日などの順に切り替えられます。
- **歌唱回数**：その楽曲が登録動画内で歌われた回数を確認できます。
- **歌唱履歴**：楽曲の履歴を開くと、歌われた動画やタイムスタンプを確認できます。履歴内のタイムスタンプから該当箇所へ移動できる場合は、その操作を利用してください。
- **編集**：楽曲名やアーティスト情報を修正します。既存の楽曲情報を変更すると、関連する歌唱履歴の表示にも変更が反映されます。

<h3 id="sec-3-2" class="text-lg font-semibold mt-6 mb-3">3.2 アーティスト一覧</h3>

原曲アーティストの情報をまとめて管理する画面です。

- 検索欄でアーティスト名を探します。
- 並び替えやフィルターが表示されている場合は、目的に合わせて利用します。
- 「編集」からアーティスト名などを修正できます。
- アーティスト名を変更すると、そのアーティストに紐づく楽曲情報にも変更が反映されます。

同じアーティストが表記違いで複数登録されている場合は、既存データとの関係を確認したうえで修正してください。

<h3 id="sec-3-3" class="text-lg font-semibold mt-6 mb-3">3.3 チャンネル一覧</h3>

動画の配信元や、歌唱者として指定するチャンネル情報を管理します。

- **新しく登録**：新しいチャンネル情報を追加します。
- **編集**：表示名、アカウントID／ハンドル名、アイコン画像URLなどの情報を修正します。
- **検索・フィルター**：登録済みのチャンネルを探します。

チャンネル情報を変更すると、関連する動画や歌唱者の表示にも反映されます。別の人物・チャンネルを誤って同じ情報にまとめないよう、変更前に関連データを確認してください。

<h3 id="sec-3-4" class="text-lg font-semibold mt-6 mb-3">3.4 タグ管理</h3>

タグ管理では、動画や楽曲の分類に使うタグを確認・整理します。

- 登録済みタグの一覧から、管理したいタグを探します。
- 編集操作が表示されている場合は、タグ名などを修正します。
- 動画や楽曲に付けたタグを整理すると、一覧のタグフィルターから目的のデータを探しやすくなります。

タグ名を変更・整理する場合は、同じ意味のタグが重複していないか確認し、分類ルールをできるだけ統一してください。

<h2 id="sec-4" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">4. バックアップ・復元・共有</h2>

「バックアップ / 復元」では、データのファイル保存、バックアップからの復元、共有URLの発行、GitHubへの保存・読み込みを行えます。

<h3 id="sec-4-1" class="text-lg font-semibold mt-6 mb-3">4.1 .uwpファイルで保存・復元する</h3>

#### バックアップを保存する
1. 「バックアップを保存（.uwpファイル）」をクリックします。
2. ダウンロードされた \`.uwp\` ファイルを、分かりやすい場所に保管します。
3. データを更新した後も、定期的に新しいバックアップを作成してください。

ファイル名は日時を含む形式（例：\`YYYYMMDD_HHMMSS_utawakudb.uwp\`）になります。

#### バックアップから復元する
1. 「.uwpファイルからデータを復元」をクリックします。
2. 復元したいバックアップファイルを選択します。
3. 画面の確認メッセージを読み、処理を完了します。
4. 復元後、動画一覧やデータ管理を開き、必要なデータが読み込まれていることを確認します。

<div class="help-note"><b>注意：</b> 復元は現在のデータを置き換える場合があります。復元前に、現在のデータも別の .uwp ファイルとして保存しておくことをおすすめします。</div>

<h3 id="sec-4-2" class="text-lg font-semibold mt-6 mb-3">4.2 共有URLを発行する</h3>

1. 「共有URLを発行・コピー」をクリックします。
2. 共有用データの作成が完了すると、共有URLがクリップボードにコピーされます。
3. URLを共有相手に送ります。受け取った側はURLを開き、表示される案内に従ってデータを読み込みます。

URLを受け取った相手がデータを閲覧・読み込みできることを前提に共有してください。個人情報や公開したくない情報が含まれていないか確認してから利用してください。

<h3 id="sec-4-3" class="text-lg font-semibold mt-6 mb-3">4.3 GitHub連携</h3>

GitHubのリポジトリに .uwp バックアップを保存し、後から読み込めます。

#### 設定項目
- **オーナー名**：保存先リポジトリの所有者名。
- **リポジトリ名**：保存先のリポジトリ名。
- **保存ファイル名**：リポジトリ内で使用するファイル名やパス。例：\`data/sonatheca.uwp\`。
- **Personal Access Token (PAT)**：リポジトリの内容を読み書きできる権限を付けたトークン。

#### 保存・読み込み
1. 各項目を入力します。
2. **GitHubへ保存**：現在のデータを指定したリポジトリ内の .uwp ファイルとして保存します。
3. **GitHubから読み込み**：指定した場所のバックアップを読み込みます。
4. 読み込み後、一覧を開いて内容を確認します。

<div class="help-note"><b>セキュリティ上の注意：</b> PATはパスワードと同様に扱ってください。必要最小限の権限のみを付与し、他人と共有しないでください。アプリの表示どおりブラウザに保存される設定であっても、共有端末ではトークンを保存したままにしないでください。Publicリポジトリに保存する場合は、バックアップの内容が公開される可能性にも注意してください。</div>

<h3 id="sec-4-4" class="text-lg font-semibold mt-6 mb-3">4.4 データの初期化</h3>

「すべてのデータを削除」を実行すると、登録したデータが削除され、元に戻せない場合があります。実行前に必ずバックアップを保存し、確認ダイアログの内容をよく読んでください。単に一部の情報を修正したい場合は、初期化ではなく各一覧の編集操作を利用してください。

<h2 id="sec-5" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">5. よくある質問（FAQ）</h2>

#### Q1. 動画タイトルを取得できません。
動画URLや動画IDが正しいか確認してください。動画の公開状態やYouTube側の応答状況によっては取得できない場合があります。その場合は、タイトルを手動で入力してください。

#### Q2. サムネイルが表示されません。
動画URLが正しいか確認してください。独自の画像を使いたい場合は、動画の編集画面にカスタムサムネイルの入力欄がある場合、画像URLを設定してください。画像URLが有効で、ブラウザからアクセスできることも確認してください。

#### Q3. 一括解析で一部の曲が登録されません。
タイムスタンプと楽曲情報の区切りが認識されていない可能性があります。例のように時間・曲名・アーティスト名を読み分けやすい形式に整え、解析結果を確認してください。うまくいかない行は、1曲ずつ入力してください。

#### Q4. 登録したはずの動画や楽曲が見つかりません。
検索語、並び替え、チャンネル・楽曲・タグのフィルターを確認してください。フィルターを解除して再検索すると見つかる場合があります。

#### Q5. ブラウザを変えたらデータがありません。
データは別のブラウザや端末に自動的に共有されるとは限りません。以前の端末で保存した .uwp ファイルを復元するか、設定済みのGitHub連携から読み込んでください。

#### Q6. ブラウザのデータを消しても大丈夫ですか？
保存場所のデータが削除されると、アプリ内の登録内容や設定が失われる可能性があります。ブラウザのサイトデータを削除する前に、必ず .uwp バックアップを作成してください。

#### Q7. GitHubへの保存・読み込みに失敗します。
オーナー名、リポジトリ名、保存ファイル名、PATの入力内容を確認してください。PATの有効期限や権限、リポジトリへのアクセス権も確認します。エラーが続く場合は、トークンを再発行する前に設定内容と権限を見直してください。

<h2 id="sec-6" class="text-xl font-bold mt-8 mb-4 pt-4 border-t border-slate-700/60">6. バージョン変更履歴</h2>

### v2.1.0（2026-10-11）
- アーティスト名を入力時、複数人を入力できるように改善。
- 動画・タイムスタンプへのタグ機能、タイムスタンプへのメモ機能を追加。

### v2.0.0 (2026-10-10)
- UIの大幅アップデート
- **機能追加**: 一部フィルタ機能の追加

### v1.0.1 (2026-10-03)
- **改良**: セキュリティ面の向上。
- **修正**: アプリない文章の一部修正・変更。

### v1.0.0 (2026-09-28)
- **初期リリース**: 歌枠データベース v1.0 を公開。
- **コア機能**: YouTube動画URLからのタイトル自動取得、およびタイムスタンプに合わせた動画プレイヤーの自動ジャンプ・追従再生機能を実装。
- **一括登録機能**: 概要欄等のテキストから「時間」「楽曲名」「アーティスト名」を自動抽出するテキスト解析エンジンを搭載。
- **データベース管理**: 楽曲、原曲アーティスト、チャンネル（配信者・歌唱者）のマスターデータを横断的に閲覧・一括編集できるデータ管理タブを実装。
- **バックアップ・共有**: 独自アーカイブ形式 \`.uwp\` によるローカルバックアップ・復元機能、および GitHub PAT・Gist API を利用したクラウドデータ同期・共有機能を実装。

<div class="text-center text-xs text-gray-400 my-4">SonA'Theca v2.1.0 — Singing Video Archive</div>
`;
