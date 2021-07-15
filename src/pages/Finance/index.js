import React from "react";
import Chart from "react-apexcharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import MainMenu from "../../Components/MainMenu";
import { useScreenMeasure } from "../../utils/isMobile";
import { Themes } from "../../utils/themes";
import { useFinance } from "./hooks";

import {
  ContentHeader,
  Content,
  Container,
  ContainerButtons,
  ButtonText,
  ButtonHeader,
  Row,
  RowTitle,
  Title,
  RowContent,
  ProgressContent,
  ContentGoal,
  Goal,
  RowGoal,
  Value,
  Label,
  RowMonthDetails,
  Button,
  ButtonContainer,
  TitleContent,
  Input,
  ButtonContent,
} from "./styles";

function Finance() {
  const [isMobile] = useScreenMeasure();
  const [
    handleMenuMobileOpen,
    isMenuMobileOpened,
    setIsMenuMobileOpened,
    series,
    options,
    selectedWeekly,
    setSelectedWeekly,
    seriesDay,
    optionsDays,
    goal,
    objective,
    setObjective,
    createGoal,
    porcentage,
  ] = useFinance();

  return (
    <div className="page foodMenu">
      <MainMenu
        isMenuMobileOpened={isMenuMobileOpened}
        onClick={handleMenuMobileOpen}
        currentPage="finance"
      />
      <Container isMobile={isMobile}>
        <Content full>
          <ContentHeader>
            <ContainerButtons>
              <ButtonHeader
                onClick={() => setSelectedWeekly(!selectedWeekly)}
                selected={!selectedWeekly}
              >
                <ButtonText>
                  Desempenho do restaurante nos últimos meses
                </ButtonText>
              </ButtonHeader>

              <ButtonHeader
                onClick={() => setSelectedWeekly(!selectedWeekly)}
                selected={selectedWeekly}
              >
                <ButtonText>
                  Desempenho do restaurante na última semana
                </ButtonText>
              </ButtonHeader>
            </ContainerButtons>

            {!selectedWeekly ? (
              <Chart
                options={options}
                series={series.series}
                type="line"
                height={250}
                width={"100%"}
              />
            ) : (
              <Chart
                options={optionsDays}
                series={seriesDay.series}
                type="bar"
                height={250}
                width={"100%"}
              />
            )}
          </ContentHeader>
        </Content>

        <Row>
          <Content align={!goal}>
            <ContentHeader>
              <RowTitle>
                <Title>{goal ? "Sua meta" : "Definir meta"}</Title>

                {/* <Change>Alterar</Change> */}
              </RowTitle>
            </ContentHeader>
            {goal ? (
              <RowContent>
                <ProgressContent>
                  <CircularProgressbar
                    value={porcentage}
                    text={`${porcentage}%`}
                    styles={buildStyles({
                      // Text size
                      textSize: "25px",

                      // Colors
                      pathColor: `#ffe115`,
                      textColor: Themes().wordColors,
                      trailColor: Themes().financeBackground,
                    })}
                  />
                </ProgressContent>

                <ContentGoal>
                  <Goal>
                    <Value>
                      {goal.objective.toLocaleString("pt-br", {
                        currency: "brl",
                        style: "currency",
                      })}
                    </Value>
                    <Label>Meta</Label>
                  </Goal>
                  <RowGoal>
                    <Goal>
                      <Value small>
                        {goal.inTheMoment.toLocaleString("pt-br", {
                          currency: "brl",
                          style: "currency",
                        })}
                      </Value>
                      <Label small>Ganhos</Label>
                    </Goal>

                    <Goal>
                      <Value small>
                        {goal.salesInTheMoment.toLocaleString("pt-br", {
                          currency: "brl",
                          style: "currency",
                        })}
                      </Value>
                      <Label small>Vendas</Label>
                    </Goal>
                  </RowGoal>
                </ContentGoal>
              </RowContent>
            ) : (
              <>
                <TitleContent>
                  Defina uma meta para medir seu desempenho
                </TitleContent>
                <Input
                  type="number"
                  onChange={(event) => setObjective(event.target.value)}
                  value={objective}
                />
                <ButtonContent onClick={createGoal}>
                  <p>Definir meta</p>
                </ButtonContent>
              </>
            )}
          </Content>

          <Content>
            <ContentHeader>
              <RowTitle>
                <Title>Detalhes do mês</Title>
              </RowTitle>
            </ContentHeader>

            <RowMonthDetails>
              <h1>Valor ganho</h1>
              <p>R$ 2300,00</p>
            </RowMonthDetails>

            <RowMonthDetails>
              <h1>Comissão do FoodZilla</h1>
              <p>R$ 2300,00</p>
            </RowMonthDetails>

            <RowMonthDetails>
              <h1>Cupons</h1>
              <p>R$ 2300,00</p>
            </RowMonthDetails>

            <RowMonthDetails>
              <h1>Anúncios</h1>
              <p>R$ 2300,00</p>
            </RowMonthDetails>

            <RowMonthDetails>
              <h1>Outras taxas</h1>
              <p>R$ 2300,00</p>
            </RowMonthDetails>

            <ButtonContainer>
              <Button>
                <p>Adiantar pagamento</p>
              </Button>
            </ButtonContainer>
          </Content>
        </Row>

        <Content full>
          <ContentHeader>
            <RowTitle>
              <Title>Produtos mais vendidos</Title>
            </RowTitle>
          </ContentHeader>
        </Content>
      </Container>
    </div>
  );
}

export default Finance;
