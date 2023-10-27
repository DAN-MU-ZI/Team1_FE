import React from 'react';
import { Badge, BadgeCont, BadgeText, BorderDayBox, DateCircle, OutterDayBox } from 'components/Calendar/CalendarStyle';
import Text from 'components/@commons/Text';
import { stringDateIsToday } from 'utils/dateToString';

interface DayBoxProps {
  dateString: string;
  timeList: string[] | null;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
}

const CalendarDayBox = ({ dateString, timeList, onClick, isSelected }: DayBoxProps): JSX.Element => {
  const date = Number.parseInt(dateString.split('-')[2]);

  return (
    <OutterDayBox onClick={onClick} $aspectRatio="0.8" $disabled={timeList === null}>
      {isSelected && <BorderDayBox />}
      <DateCircle $isToday={stringDateIsToday(dateString)}>
        <Text size="xs" weight="regular">
          {date}
        </Text>
      </DateCircle>
      <BadgeCont>
        {timeList?.map((t) => (
          <Badge key={t} $time={t}>
            <BadgeText>{t}</BadgeText>
          </Badge>
        ))}
      </BadgeCont>
    </OutterDayBox>
  );
};

export default CalendarDayBox;
