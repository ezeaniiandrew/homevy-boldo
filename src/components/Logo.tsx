interface LogoProps {
  fillColor: string;
  height: number;
  width: number;
  name?: string;
}

export default function SVGLogo({ fillColor, height, width, name }: LogoProps) {
  if (name === "presto") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14491_111)">
          <path
            d="M10.0824 2.6928C10.045 2.62065 10.0222 2.54185 10.0152 2.46088C10.0083 2.37992 10.0174 2.29839 10.042 2.22094C10.0666 2.14349 10.1062 2.07165 10.1586 2.00952C10.2109 1.94738 10.275 1.89617 10.3472 1.85882C12.5614 0.732831 15.0211 0.175598 17.5044 0.237354C19.9878 0.299111 22.4167 0.977916 24.5722 2.21257C24.643 2.25323 24.7049 2.30749 24.7545 2.37221C24.8042 2.43694 24.8405 2.51085 24.8614 2.58968C24.8823 2.66851 24.8874 2.75071 24.8764 2.83152C24.8654 2.91234 24.8385 2.99018 24.7973 3.06055L17.6762 15.2818C17.6219 15.3754 17.5439 15.4531 17.45 15.507C17.3562 15.5609 17.2499 15.5892 17.1416 15.589H17.1259C17.0151 15.5861 16.907 15.5535 16.813 15.4947C16.719 15.4359 16.6425 15.353 16.5913 15.2546L10.0824 2.6928ZM16.7596 18.8484V18.8471L10.2505 6.28535C10.1749 6.13992 10.0448 6.0303 9.88866 5.98043C9.73253 5.93056 9.563 5.94448 9.4171 6.01917C7.68233 6.90867 6.1403 8.13201 4.87953 9.61899C3.61875 11.106 2.66405 12.8273 2.07021 14.6842C1.47637 16.541 1.2551 18.4969 1.41908 20.4395C1.58306 22.3822 2.12907 24.2733 3.02578 26.0043C3.92248 27.7354 5.15223 29.2723 6.64443 30.5269C8.13663 31.7815 9.8619 32.729 11.7212 33.3151C13.5806 33.9013 15.5373 34.1144 17.4793 33.9424C19.4212 33.7703 21.31 33.2164 23.0373 32.3125C23.1824 32.2366 23.2915 32.1063 23.3409 31.9501C23.3904 31.794 23.376 31.6247 23.301 31.4791L16.7596 18.8484ZM24.3897 30.7219L24.4392 30.821C24.514 30.9671 24.6429 31.0782 24.7984 31.1306C24.8622 31.1518 24.9296 31.1602 24.9966 31.1554C25.0946 31.1527 25.1912 31.1317 25.2815 31.0935C25.507 30.9817 25.7261 30.8577 25.938 30.7219C26.568 30.3564 27.1685 29.9422 27.734 29.4832H23.7456L24.3897 30.7219ZM23.1015 28.2446H29.0841C29.4688 27.8581 29.8248 27.4441 30.1494 27.006H22.4574L23.1015 28.2446ZM21.8257 25.7673H31.0288C31.2825 25.3696 31.5101 24.9559 31.71 24.5287H21.1816L21.8257 25.7673ZM20.5375 23.29H32.255C32.4194 22.8857 32.56 22.4721 32.6762 22.0514H19.8934L20.5375 23.29ZM19.2493 20.8127H32.9858C33.0602 20.404 33.1221 19.9952 33.1592 19.5741H18.6176L19.2493 20.8127ZM25.8884 5.15633C25.8189 5.1131 25.7409 5.08521 25.6598 5.07453C25.5786 5.06385 25.4961 5.07062 25.4177 5.0944C25.3375 5.11272 25.2619 5.1475 25.1959 5.19654C25.1298 5.24558 25.0746 5.30781 25.0338 5.37928L24.6993 5.94906H27.0899C26.7039 5.66352 26.3028 5.3989 25.8884 5.15633ZM28.5887 7.1877H23.9809L23.2625 8.42634H29.7654C29.3989 7.98973 29.0059 7.57607 28.5887 7.1877ZM30.6944 9.66498H22.5317L21.8133 10.9036H31.4499C31.2264 10.4741 30.974 10.0603 30.6944 9.66498ZM32.0445 12.1423H21.0949L20.3765 13.3809H32.5275C32.3902 12.9592 32.229 12.5456 32.0445 12.1423ZM32.8744 14.6195H19.6457L18.9273 15.8582H33.0973C33.0481 15.4412 32.9737 15.0275 32.8744 14.6195ZM33.2212 17.0968H18.2088L17.9116 17.6047C17.8579 17.6941 17.8285 17.796 17.8264 17.9003C17.8242 18.0046 17.8493 18.1076 17.8992 18.1992L17.9735 18.3355H33.246C33.2583 18.2116 33.2583 18.0754 33.2583 17.9515C33.2583 17.6666 33.246 17.3817 33.2212 17.0968Z"
            fill={fillColor}
          />
          <path
            d="M9.79779 5.40696C9.57075 4.97673 9.03637 4.80993 8.61954 5.06072C5.31966 7.04608 2.85427 10.182 1.71086 13.8808C0.480492 17.861 0.881619 22.1669 2.826 25.8512C4.77038 29.5356 8.09873 32.2967 12.0789 33.5271C15.7777 34.6705 19.7579 34.4049 23.2591 32.801C23.7013 32.5985 23.8652 32.0632 23.6382 31.6329L16.718 18.52L9.79779 5.40696Z"
            fill={fillColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_14491_111">
            <rect
              width="32.745"
              height="34.8351"
              fill={fillColor}
              transform="translate(0.731323 -0.319336)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15.5H16.2851C21.0522 15.5 24.9167 19.3645 24.9167 24.1316C24.9167 28.8987 21.0522 32.7632 16.2851 32.7632H0V15.5Z"
        fill={fillColor}
      />
      <path
        d="M0 0.394531H10.8597C14.435 0.394531 17.3333 3.2929 17.3333 6.86822C17.3333 10.4435 14.435 13.3419 10.8597 13.3419H0V0.394531Z"
        fill={fillColor}
      />
    </svg>
  );
}
