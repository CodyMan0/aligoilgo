import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

import IMAGE_MAP from '@/constants/image';
import logo from '../assets/logo/hero.jpeg';

const NotFoundPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4">
            <img src={IMAGE_MAP.shockedOliIcon} alt="error-oli-image" />
            <img src={IMAGE_MAP.shockedOliIcon} alt="error-oli-image" />
            <img src={IMAGE_MAP.shockedOliIcon} alt="error-oli-image" />
          </div>
          <h1 className="text-3xl desktop:text-4xl font-bold mt-4 mb-4">{error.status}</h1>
          <h2 className="text-2xl desktop:text-2xl font-bold mt-4 mb-4">{error.statusText}</h2>

          <h2 className="text-xl desktop:text-xl font-bold mt-4 mb-4 cursor-pointer hover:text-mainHover">
            <Link to="/">랜딩 페이지로 이동하기</Link>
          </h2>
        </div>
      </section>
    );
  } else {
    <section className="flex flex-col items-center justify-center h-screen px-6 py-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <img src={logo} alt="사진" className="w-3/5" />
      </div>
    </section>;
  }
};

export default NotFoundPage;
