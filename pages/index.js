import { Header, Content } from '../components/';
import { lesson1 as content } from '../data/lesson1';
export default function Home() {
  // const content = [
  //   {
  //     id: 1,
  //     title: 'Js Quick Guide',
  //     subtitle: 'ES6 Guide',
  //     content:''
  //   },
  //   {
  //     id: 2,
  //     title: 'Js Quick Guide',
  //     subtitle: 'ES7 Guide',
  //   },

  // ];
  return (
    <div className="bg-blue-200 h-80 justify-center">
      <div>
        <Header />
        <Content content={content} />
      </div>
    </div>
  );
}
