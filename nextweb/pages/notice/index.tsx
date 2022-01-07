import Link from 'next/link';
import { useState } from 'react';

interface NoticeListDataModel {
  idx: number;
  title: string;
}

const Notice = () => {
  const [noticeList, setNoticeList] = useState<NoticeListDataModel[]>([
    {
      idx: 1,
      title: '2022 공지사항입니다.',
    },
    {
      idx: 2,
      title: '2022 공지사항입니다.1',
    },
    {
      idx: 3,
      title: '2022 공지사항입니다.2',
    },
  ]);

  return (
    <section className='noticePage'>
      <div className='noticeContainer'>
        <h2>공지사항</h2>
        <div>
          <ul className='notice_ul'>
            {noticeList?.map((item) => {
              return (
                <>
                  <Link href='/notice/board' as='/notice/board'>
                    <a>
                      <li key={item.idx}>{item.title}</li>
                    </a>
                  </Link>
                </>
              );
            })}
          </ul>
          {noticeList.length > 10 && <button> + 더보기</button>}
        </div>
      </div>
    </section>
  );
};

export default Notice;

// 조건부 랜더링 사용 예제
