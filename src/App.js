import React, { useState, useEffect } from 'react';
import './App.css';
import './CouponForm.css'; // 스타일 파일 불러오기
import { HashLoader } from 'react-spinners';

const App = () => {
  // 각 필드의 상태를 관리하는 useState 훅을 사용합니다.
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [imageUrl, setImageUrl] = useState(
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211006_195%2F1633486303939uKtEG_PNG%2FZrsWsP4yVkxWKPRvV-XI3Vy4.png'
  );
  const [productName, setProductName] = useState('쭈곱새 3000원 할인');
  const [couponName, setCouponName] = useState('신메뉴 출시 기념 쿠폰');
  const [couponDate, setCouponDate] = useState(
    '응모기간 2024.04.01-2024.04.30'
  );
  const [barcodeImageUrl, setBarcodeImageUrl] = useState(
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDdfMTY0%2FMDAxNjQ5MzE5OTU4NDg2.nR4GqMrl2a61HTzXkxwdMymtFcL3UzdPyUUmptdREycg.WyBy594iyHV7O4hRCmj8cffo6qOCuYxUW3TeW6yJNOgg.JPEG.i-iprinting%2FCK_psxtg0709920.jpg&type=a340'
  );
  const [isCouponIssued, setIsCouponIssued] = useState(false);
  const [isEmployeeChecked, setIsEmployeeChecked] = useState(false);
  const [isCouponUsed, setIsCouponUsed] = useState(false);

  useEffect(() => {
    // 0.5초 후 로딩 상태를 false로 변경하여 화면을 표시합니다.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // 컴포넌트가 unmount될 때 타이머를 클리어합니다.
    return () => clearTimeout(timer);
  }, []);

  // 폼 제출 시 처리 adaf
  const handleSubmit = (event) => {
    event.preventDefault();
    // 쿠폰 발급 로직을 여기에 추가하세요
    console.log('쿠폰 발급 버튼이 클릭되었습니다.');

    // 쿠폰 발급 여부를 확인하는 confirm 창을 띄웁니다.
    const confirmIssuingCoupon = window.confirm('쿠폰을 발급하시겠습니까?');
    if (confirmIssuingCoupon) {
      // 임시로 바코드 이미지 URL을 설정합니다.
      const tempBarcodeImageUrl =
        'https://img.freepik.com/free-psd/barcode-illustration-isolated_23-2150584088.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1713312000&semt=ais';

      // 바코드 이미지 URL을 상태에 업데이트합니다.
      setBarcodeImageUrl(tempBarcodeImageUrl);
      setIsCouponIssued(true); // 쿠폰이 발급되었음을 표시합니다.

      // 응모 기간을 사용 만료일로 변경합니다.
      const expirationDate = '사용 만료일 2024.05.07'; // 예시로 사용 만료일을 설정합니다.
      setCouponDate(expirationDate);
    }
  };

  // 직원 확인 버튼 클릭 시 처리
  const handleEmployeeCheck = () => {
    // 직원 확인 여부를 확인하는 confirm 창을 띄웁니다.
    const confirmEmployeeCheck =
      window.confirm('직원확인 처리를 하시겠습니까?');
    if (confirmEmployeeCheck) {
      // 직원 확인이 완료되면 쿠폰 사용 완료로 변경하고 더 이상 클릭되지 않도록 설정합니다.
      setIsEmployeeChecked(true); // 직원 확인이 완료되었음을 표시합니다.
      setIsCouponUsed(true); // 쿠폰 사용 완료로 설정합니다.

      // 쿠폰 사용일로 응모 기간을 변경합니다.
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();

      // 월과 일이 한 자리 숫자인 경우 앞에 0을 붙여 두 자리로 만듭니다.
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;

      const useDate = `쿠폰 사용일 ${year}.${month}.${day}`;
      setCouponDate(useDate);
    }
  };

  // 쿠폰 사용 완료 버튼 클릭 시 처리
  const handleCouponUse = () => {
    // 쿠폰가 이미 사용되었는지 확인합니다.
    if (!isCouponUsed) {
      // 쿠폰 사용 여부를 확인하는 confirm 창을 띄웁니다.
      const confirmCouponUse = window.confirm('쿠폰을 사용하시겠습니까?');
      if (confirmCouponUse) {
        setIsCouponUsed(true); // 쿠폰이 사용되었음을 표시합니다.
      }
    }
  };
  // 배너 이미지 클릭 시 처리
  const handleBannerClick = () => {
    window.open(
      'http://gs25.gsretail.com/gscvs/ko/customer-engagement/event/detail/publishing?pageNum=1&eventCode=8836791193120',
      '_blank'
    );
  };
  return (
    <div className='container'>
      {loading ? ( // 로딩 상태일 때 로딩 페이지를 표시합니다.
        <div className='loading'>
          <HashLoader color='#f1f7fa' />
          <div className='loading-text'>
            <div>
              <span className='first-text'>우</span>
              <span>리</span>
              <span> </span>
            </div>
            <div>
              <span className='first-text'>동</span>
              <span>네</span>
              <span> </span>
              <span className='first-text'>GS</span>
            </div>
            <div>
              <span className='first-text'>쿠</span>
              <span>폰</span>
            </div>
          </div>
        </div>
      ) : (
        // 로딩이 완료되면 현재 페이지를 표시합니다.
        <form onSubmit={handleSubmit}>
          <div className='coupon-item'>
            <div>
              <img className='product-image' src={imageUrl} alt='Product' />
            </div>
            <div className='product-details'>
              {/* 바코드 이미지가 있는 경우에만 표시합니다. */}
              {barcodeImageUrl && isCouponIssued && (
                <div className='coupon-item'>
                  <img
                    className='barcode-image'
                    src={barcodeImageUrl}
                    alt='Barcode'
                  />
                </div>
              )}
              <div className='product-name'>{productName}</div>
              <div className='coupon-name'>{couponName}</div>
              <div className='coupon-date'>{couponDate}</div>
            </div>
          </div>

          {/* 쿠폰 발급 또는 직원 확인 버튼을 표시합니다. */}
          {isCouponIssued && !isEmployeeChecked && (
            <button type='button' onClick={handleEmployeeCheck}>
              직원 확인
            </button>
          )}
          {/* 직원 확인 후 쿠폰 사용 완료 버튼을 표시합니다. */}
          {isCouponIssued && isEmployeeChecked && (
            <button
              type='button'
              onClick={handleCouponUse}
              disabled={isCouponUsed} // 쿠폰 사용 여부에 따라 버튼을 비활성화합니다.
            >
              {isCouponUsed ? '쿠폰 사용 완료' : '쿠폰 사용하기'}
            </button>
          )}
          {/* 쿠폰 미발급 시 발급 버튼을 표시합니다. */}
          {!isCouponIssued && (
            <button type='submit'>
              {isCouponIssued ? '직원 확인' : '쿠폰 발급'}
            </button>
          )}
          {/* 이미지 추가 */}
          <div>
            <img
              className='banner-image'
              src='https://hpsimg.gsretail.com/medias/sys_master/images/images/h97/h63/9097858318366.jpg'
              alt='Description of your image'
              onClick={handleBannerClick}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
