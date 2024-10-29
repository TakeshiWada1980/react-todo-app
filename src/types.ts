export type Todo = {
  id: string;
  name: string;
  isDone: boolean;
  priority: number;
  deadline: Date | null;
};

export type Category = {
  id: string;
  name: string;
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  categories: Category[];
  thumbnail: Thumbnail;
}

const posts: Post[] = [
  {
    id: "23h-id-nmu",
    createdAt: "2024-06-22T22:48:30.156Z",
    title: "没頭の代償",
    content:
      "<p>雪原でPC作業に没頭していました。<br>夢中になりすぎて周りが見えなくなってしまいました。気づけばすっかり雪に埋もれ、PCも故障してしまいました。少し反省の一日でした。次回はもう少し注意しようと思います。</p>",
    thumbnail: {
      url: "https://w1980.blob.core.windows.net/pg3/fig03.jpg",
      height: 400,
      width: 800,
    },
    categories: [
      {
        id: "xk4fe6-_rj",
        name: "TypeScript",
      },
      {
        id: "pwmceb6qc86",
        name: "React",
      },
    ],
  },
  {
    id: "tu-d0x2betj",
    createdAt: "2024-06-22T22:37:17.367Z",
    title: "ピクニックバスケットとノートPC",
    content:
      "<p>素敵な一日でした。<br>晴れた空の下、青々とした草原にシートを広げ、ゆったりとピクニックを楽しみました。鮮やかな青い花模様の浴衣を着て、髪には同じ色の花を飾りました。自然の中で心地よい風を感じながら、ノートパソコンを開き、いつものようにプログラミングに没頭しました。<br>風に揺れる草の音、鳥のさえずりが心を落ち着かせ、集中力を高めてくれます。近くにはおいしい飲み物が入ったピクニックバスケットもあり、時折リフレッシュしながら作業を進めました。こうした自然の中での作業は、日常のストレスを忘れさせてくれ、新たなインスピレーションを与えてくれます。<br>今日の経験は、また一つの大切な思い出となりました。自然の中で過ごす時間の大切さを改めて感じ、これからもこうした機会を大切にしたいと思います。</p>",
    thumbnail: {
      url: "https://w1980.blob.core.windows.net/pg3/fig02.jpg",
      height: 400,
      width: 800,
    },
    categories: [
      {
        id: "xk4fe6-_rj",
        name: "TypeScript",
      },
    ],
  },
  {
    id: "75dmjyj1jt63",
    createdAt: "2024-06-22T11:22:34.684Z",
    title: "砂浜のノマドライフ",
    content:
      "<p>今日は久しぶりに海岸でのんびり過ごした。<br>仕事を持ち出して、ビーチでノートパソコンを広げたけれど、驚くほど作業が捗った。波の音と心地よい風が、普段のデスクでは感じられない集中力を与えてくれたのかもしれない。周りには誰もおらず、まるでプライベートビーチのようだった。砂浜に敷いたタオルの上に座り、日差しを浴びながらコーディングを進める。<br>仕事が一段落ついた後は、少し海を眺めながらリラックスする時間を楽しんだ。忙しい毎日から解放され、心身ともにリフレッシュできた素晴らしい一日だった。こんな日がもっとあればいいのにと思う。自然の中で仕事をするのも悪くない。</p>",
    thumbnail: {
      url: "https://w1980.blob.core.windows.net/pg3/fig01.jpg",
      height: 400,
      width: 800,
    },
    categories: [
      {
        id: "xk4fe6-_rj",
        name: "TypeScript",
      },
    ],
  },
];
