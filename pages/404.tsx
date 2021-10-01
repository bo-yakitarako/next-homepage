import { NextPage } from 'next';
import Head from 'next/head';
import { Link } from '../components/Link';

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>bo-yakitarako 404</title>
        <meta name="description" content="そんなページは存在しないんだよ？" />
      </Head>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl sm:text-3xl font-normal whitespace-nowrap">
          404 | Not Found
        </p>
        <div className="m-2 text-center">
          <Link className="text-base" href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFound;
