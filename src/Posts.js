import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 0,
      userName: "senna",
      userPicture: "./assets/images/profile-senna.png",
      post: "./assets/images/post-senna.png",
      likeName: "granturismo",
      likePicture: "./assets/images/profile-gt7.png",
      likeCount: 1994,
    },
    {
      id: 1,
      userName: "fifa",
      userPicture: "./assets/images/profile-fifa.png",
      post: "./assets/images/post-football.jpg",
      likeName: "nathan",
      likePicture: "./assets/images/profile-nathan.png",
      likeCount: 20,
    },
    {
      id: 2,
      userName: "granturismo",
      userPicture: "./assets/images/profile-gt7.png",
      post: "./assets/images/post-aston-martin.jpg",
      likeName: "playstation",
      likePicture: "./assets/images/profile-ps5.png",
      likeCount: 30,
    },
    {
      id: 3,
      userName: "joaninha",
      userPicture: "./assets/images/profile-joaninha.jpg",
      post: "./assets/images/post-painting.jpg",
      likeName: "cebolinha",
      likePicture: "./assets/images/profile-cebolinha.jpg",
      likeCount: 40,
    },
    {
      id: 4,
      userName: "mariazinha",
      userPicture: "./assets/images/profile-mariazinha.jpg",
      post: "./assets/images/post-landscape.jpg",
      likeName: "joaozinho",
      likePicture: "./assets/images/profile-joazinho.jpg",
      likeCount: 40,
    },
    {
      id: 5,
      userName: "meowed",
      userPicture: "./assets/images/profile-meowed.png",
      post: "./assets/images/post-meowed.png",
      likeName: "respondeai",
      likePicture: "./assets/images/profile-respondeai.png",
      likeCount: 10,
    },
    {
      id: 6,
      userName: "sportsbr",
      userPicture: "./assets/images/profile-sportsbr.jpg",
      post: "./assets/images/post-tenis.jpg",
      likeName: "goku",
      likePicture: "./assets/images/profile-goku.png",
      likeCount: 10,
    },
  ];

  return (
    <div class="posts__box">
      <ul class="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            userName={post.userName}
            userPicture={post.userPicture}
            post={post.post}
            likeName={post.likeName}
            likePicture={post.likePicture}
            likeCount={post.likeCount}
          />
        ))}
      </ul>
    </div>
  );
}
