import React from "react";
import {
    ScheduleContainer,
    ScheduleWrapper,
    ScheduleH1,
    ScheduleTable,
    ScheduleThead,
    ScheduleTheadTR,
    ScheduleTH,
    ScheduleTBody,
    ScheduleTR,
    ScheduleTD,
    ScheduleTimeTD,
} from "./ScheduleElements";

const Schedule = () => {
    return (
        <ScheduleContainer id="schedule">
            <ScheduleH1>行程表</ScheduleH1>
            <ScheduleWrapper>
                <ScheduleTable>
                    <ScheduleThead>
                        <ScheduleTheadTR>
                            <ScheduleTH>時間</ScheduleTH>
                            <ScheduleTH>禮拜一</ScheduleTH>
                            <ScheduleTH>禮拜二</ScheduleTH>
                            <ScheduleTH>禮拜三</ScheduleTH>
                            <ScheduleTH>禮拜四</ScheduleTH>
                            <ScheduleTH>禮拜五</ScheduleTH>
                            <ScheduleTH>禮拜六</ScheduleTH>
                            <ScheduleTH>禮拜天</ScheduleTH>
                        </ScheduleTheadTR>
                    </ScheduleThead>
                    <ScheduleTBody>
                        <ScheduleTR>
                            <ScheduleTimeTD>08:00 ~ 09:00</ScheduleTimeTD>
                            <ScheduleTD>破冰遊戲</ScheduleTD>
                            <ScheduleTD>早操</ScheduleTD>
                            <ScheduleTD>早操</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD>早操</ScheduleTD>
                            <ScheduleTD>早操</ScheduleTD>
                            <ScheduleTD>早操</ScheduleTD>
                        </ScheduleTR>
                        <ScheduleTR>
                            <ScheduleTimeTD>09:00 ~ 12:00</ScheduleTimeTD>
                            <ScheduleTD>大地遊戲</ScheduleTD>
                            <ScheduleTD>量子</ScheduleTD>
                            <ScheduleTD>RPG</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD>演算法</ScheduleTD>
                            <ScheduleTD>資安</ScheduleTD>
                            <ScheduleTD>成果發表</ScheduleTD>
                        </ScheduleTR>
                        <ScheduleTR>
                            <ScheduleTimeTD>12:00 ~ 13:00</ScheduleTimeTD>
                            <ScheduleTD>午休</ScheduleTD>
                            <ScheduleTD>午休</ScheduleTD>
                            <ScheduleTD>午休</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD>午休</ScheduleTD>
                            <ScheduleTD>午休</ScheduleTD>
                            <ScheduleTD>午休</ScheduleTD>
                        </ScheduleTR>
                        <ScheduleTR>
                            <ScheduleTimeTD>13:00 ~ 17:00</ScheduleTimeTD>
                            <ScheduleTD>DC Bot</ScheduleTD>
                            <ScheduleTD>企業參訪</ScheduleTD>
                            <ScheduleTD>C++</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD>HTML + CSS</ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                        </ScheduleTR>
                        <ScheduleTR>
                            <ScheduleTimeTD>17:00 ~ 21:00</ScheduleTimeTD>
                            <ScheduleTD></ScheduleTD>
                            <ScheduleTD></ScheduleTD>
                            <ScheduleTD></ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                            <ScheduleTD></ScheduleTD>
                            <ScheduleTD></ScheduleTD>
                            <ScheduleTD>神秘活動</ScheduleTD>
                        </ScheduleTR>
                    </ScheduleTBody>
                </ScheduleTable>
            </ScheduleWrapper>
        </ScheduleContainer>
    );
};

export default Schedule;
