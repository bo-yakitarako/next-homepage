import type { NextPage } from 'next';
import Head from 'next/head';
import { FadeIn } from '../components/FadeIn';
import { Particles } from '../components/Paricles';

const Home: NextPage = () => {
  return (
    <div className="p-0 m-0">
      <Particles />
      <Head>
        <title>千葉大学ゴルフ部の皆さまへ</title>
        <meta name="description" content="語ります" />
      </Head>
      <div className="flex absolute justify-center w-full h-screen">
        <div className="py-6 w-5/6 sm:w-1/2 h-screen">
          <FadeIn overflowY="scroll">
            <header className="py-6 mt-8">
              <h1 className="m-0 text-4xl text-center">
                千葉大学ゴルフ部の皆さまへ
              </h1>
              <p className="mt-8 mb-0 text-base text-right">萩原陽太</p>
            </header>
            <div className="pt-4">
              <p className="mb-0 text-lg">
                9月30日をもちまして千葉大学を退学する萩原陽太というものです。世代的にはもうM1なので老害も老害ですね。
                <br />
                今このWebサイトを作ってるのが9月30日の21時なのでこれを見てるときはもう10月かもしれませんが、
                俺自身このゴルフ部への思い入れがとても大きいので最後に少し語らせてください。
              </p>
              <h2 className="my-6 text-2xl text-center">まずは総じて</h2>
              <p className="mb-0 text-lg">
                今までありがとうございました。
                このゴルフ部のおかげで俺の大学生活はとても華やかになりました。
                <br />
                実は千葉大学に入学した目的というのが、国立大学で同い年くらいのやつらとワイワイゴルフがしたかった、というものなんですよね。
                <br />
                その目的は完全に達成されました。本当に楽しかったです。みんな本当にありがとう
                <br />
                <br />
                今の3年生より下の人たちはあまり知らないと思うけど、俺自身が1〜2年生のころにちょっとしたいざこざがあって、それ以外はよかったと思います。
                <br />
                それも悪いってことじゃなくて、今にして思えばゴルフ部生活の彩りの1つです。ともかく楽しかった。
              </p>
              <h2 className="my-6 text-2xl text-center">みんなへ</h2>
              <h3 className="text-xl font-bold text-center">1年生</h3>
              <p className="text-lg">
                ぶっちゃけ俺は1年生たちのことはよく知らない！でも、こんな状況でもゴルフ部に入部してくれたんだ。ありがとう
                <br />
                そしてこれからのゴルフ部をよろしくお願いします！合宿とかもあとちょっとしたら行けるようになると思うから楽しんでください！
              </p>
              <h3 className="mt-8 text-xl font-bold text-center">2年生</h3>
              <p className="text-lg">
                合宿やったことないな！だからぶっちゃけ大多数の人たちはあまりよく知りません！とはいえ全くないわけではないので
              </p>
              <h3 className="mt-6 text-xl font-bold">杉本</h3>
              <p className="text-lg">
                いっぱいゴルフ行ってくれてありがとう！いっぱい飲んでくれてありがとう！鬼滅面白かった！これからのゴルフ部をよろしくお願いします！
              </p>
              <h3 className="mt-6 text-xl font-bold">上原</h3>
              <p className="text-lg">
                民舞との兼ね合いもあるだろうけど、上原はこれからのゴルフ部を引っ張る一人だと思ってる！
                ゴルフセンスは冗談抜きで俺がゴルフ部で見てきた中で1番だと思うからもっとオラオラしていいのよ？
              </p>
              <h3 className="mt-6 text-xl font-bold">ほんちゃん</h3>
              <p className="text-lg">
                度重なる宇都宮ハラスメント申し訳ありませんでした。。。同郷がいるというのはとても嬉しかった！あとスコア良すぎるのでその調子でガンバ
              </p>
              <h3 className="mt-6 text-xl font-bold">翔大</h3>
              <p className="text-lg">
                お前ゴルフはやってるのか？？？タバコ吸ってバイトしてるイメージしかないぞい。とはいえゴルフ行ったときは負けるかと思って焦ったくらい出来るやつではあるからゴルフを楽しんでくだせえ
              </p>
              <h3 className="mt-6 text-xl font-bold">あゆむ</h3>
              <p className="text-lg">
                ゴルフ部でできた初めての情報工の後輩で嬉しかったよ！GPAは2超えてれば基本的に研究室はだいたいどこでも行けるからほどほどに頑張ってけろ〜
              </p>
              <h3 className="mt-6 text-xl font-bold">わたるジュニア</h3>
              <p className="text-lg">
                あんまりゴルフ一緒に行けなかったけど、結構部活にはきてくれていて嬉しい限りだった。。。伸びしろめっちゃあるからこれからも練習頑張ってね
              </p>
              <h3 className="mt-6 text-xl font-bold">片桐</h3>
              <p className="text-lg">
                絡みがほんちゃん家で飲んだあのときくらいしか無いーーーーーーーできたらいっしょにゴルフでも行けたらよかったなあ
              </p>
              <h3 className="mt-6 text-xl font-bold">れいじゅちゃん</h3>
              <p className="text-lg">
                追いコンで松井さんの接待やってくれてありがたかった。。。女の子はゴルフ部ですっげー貴重だから後輩の女子たちをぜひたくさん連れ込んでほしいな
              </p>
              <h3 className="mt-6 text-xl font-bold">もえかちゃん</h3>
              <p className="text-lg">
                数少ない経験者枠だったのに、結局一度も回れなくて残念だった。。。なにか機会があればそのときはよろしくお願いします。。。
              </p>
              <h3 className="mt-8 text-xl font-bold text-center">3年生</h3>
              <p className="text-lg">
                コロナで大変な時期にゴルフ部が任されてしまって正直気の毒だ！でもうまくやってくれてありがとう！
              </p>
              <h3 className="mt-6 text-xl font-bold">みかど選手</h3>
              <p className="text-lg">
                部長を引き受けてくれて感謝。。。同レベルの人が来たあのときの衝撃は今でも忘れないぜ。負けないようにゴルフ頑張ります
              </p>
              <h3 className="mt-6 text-xl font-bold">松岡</h3>
              <p className="text-lg">
                ひとえにゴルフ部が存続できてるのは松岡の功績やでぇ。。。マジで色々やってくれてありがたかった。。。代替わりしたら落ち着いてゴルフしてくだせえ。あと論文がんば
              </p>
              <h3 className="mt-6 text-xl font-bold">かいちゃん</h3>
              <p className="text-lg">
                松岡と並んで色々やってくれてありがとう！俺はかいちゃんになんにもしてあげられてないのに色々慕ってくれて嬉しかったよ！女遊びはほどほどにね
              </p>
              <h3 className="mt-6 text-xl font-bold">たけちゃん</h3>
              <p className="text-lg">
                ゴルフやってるかい？？？プログラミングも大事だし研究室も忙しくなるだろうけど、ゴルフも続けてほしいぞい！みかどと仲良くね〜
              </p>
              <h3 className="mt-6 text-xl font-bold">石原</h3>
              <p className="text-lg">
                なんか一時期からめっちゃやつれててちょっと心配だったけど大丈夫け？追いコンのときはボウリング楽しかったぜ。またやろう
              </p>
              <h3 className="mt-6 text-xl font-bold">わたるシニア</h3>
              <p className="text-lg">
                飲み番長！いっしょにゴルフやったときはすっげーしおらしいのに、飲み会は豪快だからビビった！ゴルフも豪快に行こうぜ
              </p>
              <h3 className="mt-6 text-xl font-bold">西村</h3>
              <p className="text-lg">
                最近全く会えてないけど元気かなあ。合宿最終日に回ったときが先輩や同期と一緒に回った数あるゴルフ部でのラウンドで一番楽しかったのは内緒や
              </p>
              <h3 className="mt-6 text-xl font-bold">ももなちゃん</h3>
              <p className="text-lg">
                生きてる？？？何回かまんないっしょに行けて楽しかったで〜〜〜蘇我で交番の前に停車するときはいつもビビってた
              </p>
              <h3 className="mt-8 text-xl font-bold text-center">4年生</h3>
              <p className="text-lg">
                俺にとっての最初の後輩になってくれてありがとうございました！それと、入部から半年くらいの時期はご迷惑おかけしました。。。
              </p>
              <h3 className="mt-6 text-xl font-bold">まっきー</h3>
              <p className="text-lg">
                部長を引き受けてくれてありがとう！部長始まった途端コロナだったから先生とかとのやり取りとかマジでめんどかったと思う。あと18でゴルフめっちゃやるの貴重だったからうれしみだった！そういえばこの前のラウンドめっちゃ良かったね
              </p>
              <h3 className="mt-6 text-xl font-bold">かとちゃん</h3>
              <p className="text-lg">
                たくさんダル絡みを受け止めてくれてありがとうございました。。。多分これからもダル絡みするんでそのときはまたよろしくお願いいたします。
              </p>
              <h3 className="mt-6 text-xl font-bold">ゆずか</h3>
              <p className="text-lg">
                ゴルフ部運営で裏でめっちゃ色々やってくれたと記憶している。マジで感謝だ。。。暇ならまたゴルフ行きましょうね
              </p>
              <h3 className="mt-6 text-xl font-bold">杉浦</h3>
              <p className="text-lg">
                2年生からの参加だったけど、ゴルフ熱一番アッチアチでなんでも聞いてくれるから会話が楽しかったわぁ。社会人になってもゴルフは続けてくらさい
              </p>
              <h3 className="mt-6 text-xl font-bold">山田ちゃん</h3>
              <p className="text-lg">
                まんなの帰りは絶対就寝マン。眠かったときに変なチャレンジとかさせちゃって少し反省してます。。。あと元気？？？今更だけど内定おめでとう！
              </p>
              <h3 className="mt-6 text-xl font-bold">じんのじょう</h3>
              <p className="text-lg">
                ゴルフ部に伝わる安田顕。最近はスマホ音ゲーにどっぷりハマってるご様子。Twitterのbioにゴルフ部って書くならゴルフやれよな！期待してるぞい
              </p>
              <h3 className="mt-6 text-xl font-bold">かなみさん</h3>
              <p className="text-lg">
                もうちょっと一緒にゴルフ行ったりしたかったんですが、ちょっと情勢がアレでしたね。子育てに看護に大学に色々こなしててめっちゃ尊敬してます！お身体にはお気をつけて。。。
              </p>
              <h3 className="mt-6 text-xl font-bold">高宮 & 矢野ちゃん</h3>
              <p className="text-lg">
                一昨年くらいから音沙汰が無くて現在どうなってるのか全く知らない！ごめんなさい！元気でやってくれてたら嬉しい！
              </p>
              <h3 className="mt-8 text-xl font-bold text-center">同級</h3>
              <p className="text-lg">
                みんな卒業しちゃったのになにまだ大学残ってるんじゃ！
              </p>
              <h3 className="mt-6 text-xl font-bold">わたなべ</h3>
              <p className="text-lg">
                今年いきなり戻ってきてどちゃくそビビりました。とはいえほとんど活動できてないね。もうちょっとゴルフやりたかったね。。
              </p>
              <h3 className="mt-6 text-xl font-bold">まっちゃん</h3>
              <p className="text-lg">
                さて、最後はオメーじゃい。研究忙しそうでゴルフも全然できてなさそう。研究頑張ってるだろうからしっかり卒業はしてほしいな。俺には無理だったぜ。。。
              </p>
              <p className="mt-12 text-lg">
                絡みあった人は全員に言いたいこと言ったつもりだけど、抜けがあったらマジでごめんなさい。末代まで呪ってやってください。次代すらできるかわかんないけど
              </p>
              <h2 className="my-6 text-2xl text-center">最後に</h2>
              <p className="mb-0 text-lg">
                改めて本当にありがとうございました。学科での生活はマジでゴミカスだったけど、そんな中でもゴルフ部があったからこそ大学を楽しく過ごせました。
                <br />
                ってこんなお別れみたいな感じで書いてるけど、再来年の春、つまりあと1年半は西千葉に居残り続けます。来年になったら自家用車も用意するつもりなのでまだまだゴルフ行きましょうね！
                <br />
                さようならの人もいるかもしれないけど、これからもよろしくお願いします！
              </p>
              <p className="my-8 text-base text-right">
                2021年9月30日 萩原陽太
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
