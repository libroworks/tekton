# 2 進法

@@sensei w3:コンピューターの基礎になったものはいろいろあるんだけど、

@@sensei c2:一番古くて、基礎中の基礎といえるのは、

@@sensei w1:**2進法**だろうね

@posi:0

@frame:t3 back003
@o w:2 進法！
![](media/chara/0202_04c.png)
@fend

@@deshi c5:聞いたことあるような、ないような

@frame:t1 w2 c1 back001
![](media/chara/0102_12k.png)
@fend

@@sensei:「進法」というのは、数の数え方のことで

@@sensei:人間が普段使っているのは**10 進法**

@nega:120

@frame:t3 w2
![](media/chara/0203_05m.png)
@fend

@@sensei:1、2、3 と数えていって、9 のあとで繰り上がって

@@sensei:「10」になる

@frame:t1 w2
@o:1、2、3、4、5、6、7、8、9、10！
@fend

@@deshi:ふだん 10 進法を使うのは、人間の指が 10 本だからかな？

@@sensei c5:たぶんそうだろうね

@nega:40

@frame:t2 dual wf
![](media/chara/0103_02k.png)
![](media/chara/0203_20d.png)
@fend

@posi:60

@@sensei w3:ただし、時間のように 60 で 1 繰り上がる 60 進法や

@@sensei c5:12 で繰り上がる 12 進法も使われているね

@frame:t2 c2 w3 dual
@o:60 秒、60 分、<br>12 時間、12 支

![](media/chara/0203_24c.png)
@fend

@@deshi c5:となると、2 進法は 2 で繰り上がるってこと？

@frame:t1 w2 back001
![](media/chara/0102_12k.png)
@fend

@@sensei:そう、0、1 と来て、次は 10 になる

@frame:t2 wf dual
@o:0、1、10、11、100、101、110

![](media/chara/0202_04c.png)
@fend

@@deshi:桁がどんどん増えそうだね。なんでコンピューターは 2 進法を使うの？

@frame:t2 w1 c5 back000
![](media/chara/0102_11h.png)
@fend

@@sensei c5:2 進法には、他にないすごく大きなメリットがあるんだ

@nega:120

@frame:t3 w2 c1 back003
![](media/chara/0202_03c.png)
@fend

### 2 進法を使う理由

@@sensei:2 進法の起源は、古代中国の八卦だといわれている

@@deshi c6 w0:八卦？

@nega:120

@frame:t3 wf dual
![](media/chara/0202_05c.png)
![](media/chara/0102_11h.png)

@fend

@@sensei:占いの一種で、陰と陽を表す 2 つの記号を 3 つ組み合わせて

@@sensei c2:8 種類の「卦」を求め、

@@sensei:そこに意味を見出すというものだ

@nega:120

@frame:t3 wf dual
![](media/chara/inyou.png)

![](media/chara/0203_05m.png)
@fend

@@sensei:八卦は数を表すものではなかったんだけど、

@@sensei:陰と陽の 2 つの状態の組み合わせで、世界のあらゆるものを表せることを

@@sensei w0:示したんだ

@nega:100

@frame:t3 wf dual
![](media/chara/hakke.png)

![](media/chara/0202_04c.png)
@fend

@posi:40

@@deshi c5:「あらゆるもの」とはずいぶん壮大だね～

@nega:120

@frame:t3 c1 w2 back004
![](media/chara/0102_02c.png)
@fend

@@sensei w3:「2 つの状態があればいい」というのが重要なポイントで

@@sensei:それこそ、まっすぐな棒と曲がった棒とか、

@@sensei w1:黒と白の碁石とか何でも使えるよね

@nega:160

@frame:t3 wf dual
![](media/chara/goishi.jpg)

![](media/chara/0202_02c.png)
@fend

@@sensei:現在のコンピューターは 2 種類の電圧を使って、データを表すんだ

@@deshi c5:やっと話がコンピューターにつながったね

@nega:120

@frame:t3 wf dual
![](media/chara/0202_03c.png)
![](media/chara/0102_11h.png)
@fend

@@sensei:2 つの状態を表すだけでいいから、電気回路の仕組みが単純になり、

@@sensei c5:高集積化や高速化しやすくなる

@frame:t2 wf dual
![](media/chara/c0zu2.png)

![](media/chara/0202_04c.png)
@fend

@@sensei:これがコンピューターが 2 進数を使う理由だよ

@@deshi c6 w0:なるほどね

@nega:120

@frame:t3 wf dual
![](media/chara/0202_03c.png)
![](media/chara/0106_05h.png)
@fend

## 2 進法の使い方

@@sensei:2 進法による数え方を考案したのは、ライプニッツさんという

@@sensei c5 w1:17 世紀の数学者だ

@@deshi c6 w1:髪型がすごい！

@nega:120

@frame:t3 wf dual
![](media/chara/0203_05m.png)
![](media/chara/0102_10k.png)
@fend

@frame:w2
![](https://upload.wikimedia.org/wikipedia/commons/6/6a/Gottfried_Wilhelm_von_Leibniz.jpg)
ゴットフリート・ライプニッツ<br>
ドイツの数学者、哲学者（1646 ～ 1716 年）
@fend

@@sensei w1:八卦にはまって、

@@sensei:それで数を表す方法を考案したんだ

@@deshi c5:はまって考案した？　趣味で発明したの？

@nega:100

@frame:t3 wf dual
![](media/chara/0202_03c.png)
![](media/chara/0106_03n.png)
@fend

@@sensei w1:この頃の学問は、趣味と仕事の

@@sensei c2 w2:境界がはっきりしないことが多いんだよね

@nega:90

@frame:t3 w2 back003
![](media/chara/0203_05m.png)
@fend

@@deshi c5:人間が紙とペンで計算していた時代だから

@@deshi c5:たぶん 2 進法とか必要なかったよね

@@deshi c5:変わった人だ……

@nega:120

@frame:t2 c1 w1
![](media/chara/0102_11h.png)
@fend

@@sensei c3 w1:とにかく 2 進法は

@@sensei c5:コンピューターが誕生する数百年前から存在したんだ

@@deshi w1:それを今回教えてくれるんだね

@nega:80

@frame:t3 wf c1 dual
![](media/chara/0102_02c.png)
![](media/chara/0202_06e.png)
@fend

@posi:40

@@sensei w1:2 進法と 10 進法の数の対応は

@@sensei w1:次の表のとおり

@nega:120

@frame:t2 w2 c5
![](media/chara/0203_20d.png)
@fend

| 2 進数      | 10 進数 |
| ----------- | ------- |
| 0           | 0       |
| 1           | 1       |
| 10          | 2       |
| 11          | 3       |
| 100         | 4       |
| 101         | 5       |
| 110         | 6       |
| 111         | 7       |
| 1000        | 8       |
| 1001        | 9       |
| ……          | ……      |
| 10000       | 16      |
| 100000      | 32      |
| 1000000     | 64      |
| 10000000    | 128     |
| 100000000   | 256     |
| 1000000000  | 512     |
| 10000000000 | 1024    |

@posi:5

@div:small
※2 進法で表した数を 2 進数、10 進法で表した数を 10 進数と呼びます
@divend

@@deshi c1:あ～！　もう挫折しそう

@@sensei c5:まずは片手の指を使って、10 進数の 15 まで数える方法を覚えてみよう

@nega:80

@frame:t3 wf dual back002
![](media/chara/0102_22c.png)
![](media/chara/0202_04c.png)
@fend

@@deshi c6 w1:片手で 15？　 5 じゃないの？

@frame:t2 c2 w2 back001
![](media/chara/0106_03n.png)
@fend

@@sensei w3:![](media/chara/face001.png)1 本の指が 2 進数の一桁だとすると、

@@sensei:全部の指を立てた状態は 0 を表す

@@deshi c6 w1:![](media/chara/face001.png)これが 0 だね

@frame:t2 w1
![](media/chara/finger00.png)
@fend

@@sensei:![](media/chara/face001.png)親指を折ったら 1

@@deshi c6 w1:![](media/chara/face001.png)ここまでは 10 進数と同じだね

@frame:t2 w1
![](media/chara/finger01.png)
@fend

@@sensei:![](media/chara/face001.png)2 進数はここで繰り上がるから

@@sensei:人差し指を折って、親指を伸ばすと 2 だ

@frame:t2 w1
![](media/chara/finger02.png)
@fend

@@sensei:![](media/chara/face001.png)親指も折ると 3

@@deshi c5:![](media/chara/face001.png)10 進数と変わってきたね

@frame:t2 w1
![](media/chara/finger03.png)
@fend

@@sensei w3:![](media/chara/face001.png)ここでまた繰り上がって、

@@sensei c2:中指のみを折ると 4

@@deshi c5:![](media/chara/face018.png)あっ、指がつりそう

@frame:t2 w1
![](media/chara/finger04.png)
@fend

@@sensei w1:![](media/chara/face001.png)親指も折って 5

@frame:t2 w1
![](media/chara/finger05.png)
@fend

@@sensei:![](media/chara/face001.png)親指を伸ばして人差し指を折ると 6

@frame:t2 w1
![](media/chara/finger06.png)
@fend

@@deshi c5:![](media/chara/face001.png)次はわかった！　また親指を折ると 7 だね

@frame:t2 w1
![](media/chara/finger07.png)
@fend

@@sensei w3:![](media/chara/face001.png)そう、あとはこの繰り返しだ

@frame:t3 wf
![](media/chara/fingers8-15.png)
@fend

@@sensei:15 まで数えられればだいたいの用は足りるから

@@sensei c2:体で覚えるまで何度もやってみるといいよ

@@deshi c5:コツがわかると面白いね

@frame:t3 wf dual
![](media/chara/0202_03c.png)
![](media/chara/0102_02c.png)
@fend

@posi:60

@@sensei w2:![](media/chara/face001.png)別の見方をすると

@@sensei c2 w3:2 進数の各桁は 2 の倍数になっている

@frame:t1 wf
![](media/chara/c0zu3.png)
@fend

@@sensei w2:![](media/chara/face001.png)これを「重み」といって、

@@sensei c2 w3:各桁の 0/1 と重みを掛けて足して

@@sensei:10 進数に換算することもできるんだ

@nega:100

@frame:t2 wf
![](media/chara/c0zu3b.png)
@fend

@@deshi:少し難しそうだけど

@@deshi:こっちのほうが見通しがいい気もするね

@nega:100

@frame:t2
![](media/chara/0102_10k.png)
@fend

@@sensei w3:![](media/chara/face001.png)逆に 10 進数を 2 進数に変換するときは重みで割った余りを求めていくんだけど……

@frame:t1 w3
@o:15÷8……1 余り 7<br>7÷4……1 余り 3<br>3÷2……1 余り 1
@fend

@posi:40

@@sensei:16 進数を介したほうが楽だと思うよ

@@deshi c7 w0:16 進数？

@nega:120

@frame:t3 wf dual
![](media/chara/0202_05c.png)
![](media/chara/0102_11h.png)
@fend

## 16 進数

@@sensei:16 進数は、16 進法で表した数で

@@sensei:0 ～ 9 とアルファベットの A ～ F を使う

@nega:160

@frame:t4 wf dual
![](media/chara/0202_05c.png)
![](media/chara/c0zu4.png)
@fend

@@deshi c5:![](media/chara/face007.png)ふーん？

@@sensei w3:![](media/chara/face001.png)2 進法と並んで、コンピューターでよく使われる進法だ

@@sensei c2 w3:0～15までを3つの進法で表すとこのとおり

| 2 進数 | 16 進法 | 10 進数 |
| ------ | ------- | ------- |
| 0      | 0       | 0       |
| 1      | 1       | 1       |
| 10     | 2       | 2       |
| 11     | 3       | 3       |
| 100    | 4       | 4       |
| 101    | 5       | 5       |
| 110    | 6       | 6       |
| 111    | 7       | 7       |
| 1000   | 8       | 8       |
| 1001   | 9       | 9       |
| 1010   | A       | 10      |
| 1011   | B       | 11      |
| 1100   | C       | 12      |
| 1101   | D       | 13      |
| 1110   | E       | 14      |
| 1111   | F       | 15      |

@@deshi c5 w2:3 つの進法を混ぜたらかえって面倒くさくない？

@nega:80

@frame:t2 w1
![](media/chara/0102_10k.png)
@fend

@@sensei:いや、16 進法はコンピューターにも、人間にも都合がいいんだ

@frame:t2 w2
![](media/chara/0202_04c.png)
@fend

@posi:80

@@sensei:![](media/chara/face001.png)例えば、この 2 進数を 10 進数に変換してみて

@@deshi c5:![](media/chara/face018.png)えっ！　桁が多すぎるよ

@nega:80

@frame:t1 w3
@o:110100111011
@fend

@@sensei:ここで 1 回 16 進数を挟んでみよう

@frame:t2 c5 w2
![](media/chara/0203_05m.png)
@fend

@@sensei w3:![](media/chara/face001.png)16 進数の 1 桁は 2 進数の 4 桁にあたるから

@@sensei c5:次のように 4 桁ずつ分割できる

@nega:100

@frame:t1 w3
@o:1101:0011:1011
@fend

@@sensei:![](media/chara/face001.png)4 桁ごとに 16 進数に変換してみよう

@@deshi c5:さっきの表を見て変換するから、ちょっと待ってて

@nega:22

@frame:t1
![](media/chara/0106_01k.png)
@fend

@@deshi:![](media/chara/face001.png)わかった！　 D3B だ
@frame:t2 w3
@o:1101:0011:1011<br><br>13 　:　 3 　:　 11<br><br>D 　:　 3 　:　 B
@fend

@@sensei w3:![](media/chara/face001.png)これに 16 進法の重みを掛けて 10 進数に変換する

@@sensei c5:16 進法の 2 桁目は 16、3 桁目は 256 だから

@@sensei c2 w1:3387 となる

@nega:4

@frame:t1 wf
@o:D✕16<sup>2</sup>+3✕16<sup>1</sup>＋ B<br>＝ 13×256+3×16+11<br>=3387
@fend

@@deshi w3:なるほど、2 進数から直接変換するより

@@deshi:計算が少し簡単になったかな……？

@nega:80

@frame:t2 c6 w1
![](media/chara/0102_11h.png)
@fend

@@sensei w3:![](media/chara/face001.png)それに、人間が桁の多い 2 進数を覚えるのは無理だけど

@@sensei:16 進数の「D3B」なら覚えられるよね

@@deshi c6 w1:![](media/chara/face001.png)確かに

@nega:60

@frame:t1 wf
@o:1101:0011:1011 無理<br>D3B 覚えられる
@fend

@posi:40

@@sensei:10 進数に比べて、2 進数と桁もきれいに合う

@nega:100

@frame:t2 wf dual
@o:255<br>11111111<br>FF

![](media/chara/0202_04c.png)
@fend

@@sensei:だから 16 進数は、人間とコンピューターの架け橋として使われるんだ

@frame:t2 wf dual
@o:コンピューター<br>↓↑<br>16 進数<br>↓↑<br>人間

![](media/chara/0202_06e.png)
@fend

@@sensei w3:10 進数、16 進数、2 進数のすべてで、0 ～ 15 を表せるようになると、

@@sensei:たいていの用は足りるようになるよ

@@deshi c5:だから、15 までの数え方を教えてくれたんだね

@nega:120

@frame:t3 wf dual
![](media/chara/0202_03c.png)
![](media/chara/0106_05h.png)
@fend

## 2 進法の計算

## 情報量の単位

@div:staff

- 文：○○
- 絵：○○
- 参考資料
  @divend
