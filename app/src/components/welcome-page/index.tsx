import React from "react";
import { Trans, useTranslation } from "react-i18next";

import Button from "components/button";
import Link from "components/link";
import { Layout } from "common/ducks/layout";
import { WidgetsState } from "components/widget/duck";
import { exampleWidgets, exampleLayout } from "widgets/demo";

const WelcomePage: React.FC<Props> = ({ saveLayout, importWidgets }) => {
  const { t } = useTranslation();
  const createExampleBoard = () => {
    importWidgets(exampleWidgets);
    saveLayout(exampleLayout);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div
        className="max-w-full text-center space-y-5"
        style={{ width: "500px" }}
      >
        <p>
          <Trans i18nKey="welcome.message1">
            <strong>{{ projectName: "Dashboard" }}</strong>
          </Trans>
        </p>
        <p>{t("welcome.message2")}</p>
        <p>
          <Button onClick={createExampleBoard}>
            {t("welcome.createExampleBoard")}
          </Button>
        </p>
        <p>
          <Trans i18nKey="welcome.message3">
            <Link href="https://dashboard.darekkay.com/docs/" />
          </Trans>
        </p>
      </div>
    </div>
  );
};

export interface Props {
  saveLayout: (layout: Layout) => void;
  importWidgets: (widgets: WidgetsState) => void;
}

export default WelcomePage;
