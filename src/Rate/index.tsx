import React, { useEffect, useState } from "react";

import "./index.scss";
import "../assets/fonts/iconfont.css";

interface IProps {
  defaultValue?: number;
  allowHalf?: boolean;
  onChange: (val: number) => void;
}
const Rate = (props: IProps) => {
  const { defaultValue = 0, allowHalf = true, onChange } = props;
  const RateIcon = (iconTag: { iconId: number }) => {
    const { iconId } = iconTag;
    return (
      <>
        <div
          icon-rate-id={iconId}
          data-content={"\ue625"}
          className={[
            "iconfont",
            score === 0
              ? "unSelected"
              : score - iconId === -0.5
              ? "halfSelected"
              : score - iconId >= 0
              ? "selected"
              : "unSelected",
          ].join(" ")}
        >
          <i className="iconfont" style={{ fontSize: 30 }}>
            &#xe625;
          </i>
        </div>
      </>
    );
  };

  useEffect(() => {
    setscore(defaultValue);
  }, []);

  const [score, setscore] = useState(0);

  return (
    <div className="selectContainer">
      {Array.from({ length: 5 }, (item, i) => (
        <div
          key={`fe-rate-${i + 1}`}
          style={{ display: "inline-block" }}
          onClick={(event: React.MouseEvent) => {
            let currentScore = 0;
            event.stopPropagation();
            const el = event.target as HTMLDivElement;
            const elWidth = el.offsetWidth;
            const clientX = event.clientX;
            if (allowHalf) {
              if (clientX > elWidth * (i + 1) - elWidth / 2) {
                currentScore = i + 1;
                if (i + 1 === score) {
                  currentScore = 0;
                }
              } else {
                if (score % (i + 1) === score && score) {
                  currentScore = 0;
                } else {
                  currentScore = i + 0.5;
                }
              }
            } else {
              currentScore = i + 1;
              if (i + 1 === score) {
                currentScore = 0;
              }
            }

            setscore(currentScore);
            onChange(currentScore);
          }}
        >
          <RateIcon iconId={i + 1} />
        </div>
      ))}
    </div>
  );
};

export default Rate;
