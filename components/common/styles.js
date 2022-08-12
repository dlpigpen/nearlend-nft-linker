import styled from "styled-components";
import { Colors } from "../../ultils";

const nomalFont = `"Poppins", sans-serif`;
export const HeaderStyle = styled.header`
  border-bottom: 1px solid rgba(85, 212, 52, 0.5);
  transition: 0.4s all;
  position: sticky;
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(84, 169, 67, 0.08) 50%,
      rgba(84, 169, 67, 0.2) 100%
    ),
    linear-gradient(0deg, rgba(4, 21, 8, 0.5), rgba(4, 21, 8, 0.5)),
    linear-gradient(180deg, rgba(4, 36, 31, 0.8) 0%, rgba(4, 36, 31, 0) 100%);
  .logo-wrapper {
    padding: 15px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    .logo-name {
      font-size: 35px;
      font-weight: 700;
    }
  }
`;
export const MainStyle = styled.main`
  flex: 1;
  .container {
    height: 100%;
    display: flex;
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      @media (max-width: 451px) {
        padding: 0 10px;
      }
      .highlight {
        color: ${Colors.colorGreen};
      }
      .title {
        display: flex;
        gap: 10px;
        align-items: center;
        position: relative;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        @media (max-width: 451px) {
          padding-top: 20px;
        }
        .title-highlight {
          color: white;
          font-size: 3.5rem;
          @media (max-width: 451px) {
            font-size: 2.5rem;
          }
        }
        .slogun {
          position: absolute;
          bottom: 35px;
          color: ${Colors.colorGray};
          font-size: 14px;
          font-family: ${nomalFont};
          @media (max-width: 451px) {
            text-align: center;
            bottom: 100px;
          }
        }
        .near-ico {
          @media (max-width: 451px) {
            top: -75px !important;
            position: relative;
          }
        }
      }
      .content-cards {
        @media (max-width: 451px) {
          width: 100%;
        }
        .wrapper-cards {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 30px;
          font-size: 24px;
          margin: 35px 0;
          @media (max-width: 451px) {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: -44px;
            .top-step {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            .arrow-line {
              transform: rotate(90deg);
            }
          }
          .card {
            padding: 25px;
            color: white;
            border-radius: 15px;
            max-width: 250px;
            width: 100%;
            cursor: pointer;
            @media (max-width: 451px) {
              max-width: 100%;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;
              gap: 10px;
            }
            /* transition: all 0.3s ease; */
            .normal-font {
              font-family: ${nomalFont};
              text-transform: uppercase;
              font-size: 12px;
              font-weight: 600;
              padding: 10px 0;
            }
            .connected {
              letter-spacing: 1px;
              font-weight: 500;
              text-transform: none;
            }
            .purple {
              color: ${Colors.colorPurple};
            }
            .username {
              width: 176px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &:hover {
              transition: all 0.3s ease;
              transform: translateY(-10px);
            }
          }
          .block-1 {
            background: linear-gradient(
                rgba(106, 169, 67, 0) 0%,
                rgba(106, 169, 67, 0.4) 100%
              ),
              linear-gradient(
                0deg,
                rgba(106, 169, 67, 0.1),
                rgba(106, 169, 67, 0.1)
              );
            backdrop-filter: blur(14px);
            border: 2px solid rgb(84, 169, 67);
          }
          .block-2 {
            background: linear-gradient(
                rgba(81, 67, 169, 0) 0%,
                rgba(81, 67, 169, 0.5) 100%
              ),
              linear-gradient(
                0deg,
                rgba(81, 67, 169, 0.1),
                rgba(81, 67, 169, 0.1)
              );
            backdrop-filter: blur(14px);
            border: 2px solid rgba(81, 67, 169, 1);
          }
          .arrow-line {
            align-self: center;
          }
        }
      }
      .description {
        text-align: center;
        color: ${Colors.colorGray};
        font-size: 14px;
        font-family: ${nomalFont};
        line-height: 20px;
      }
      .notice-box {
        @media (max-width: 451px) {
          width: 100% !important;
        }
      }
    }
  }
`;
export const FooterStyle = styled.footer`
  .des-footer {
    font-weight: 500;

    text-align: center;
    color: ${Colors.colorGreen};
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    span {
      font-size: 18px;
    }
    .img {
      width: 20px;
      height: auto;
      margin: 0 10px 0 12px;
      display: flex;
    }
  }
`;
