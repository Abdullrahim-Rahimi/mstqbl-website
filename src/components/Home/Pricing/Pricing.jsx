import { useTranslation } from "react-i18next";
import PricingCard from "./PricingCard";
import "./Pricing.css";
import { H2, H5 } from "../../Shared/Heading";
export default function Pricing() {
  const { t } = useTranslation();

  const features1 = [
    t("home.pricing.plans1.features1"),
    t("home.pricing.plans1.features2"),
    t("home.pricing.plans1.features3"),
    t("home.pricing.plans1.features4"),
    t("home.pricing.plans1.features5"),
  ];
  const features2 = [
    t("home.pricing.plans2.features1"),
    t("home.pricing.plans2.features2"),
    t("home.pricing.plans2.features3"),
    t("home.pricing.plans2.features4"),
    t("home.pricing.plans2.features5"),
  ];
  const features3 = [
    t("home.pricing.plans3.features1"),
    t("home.pricing.plans3.features2"),
    t("home.pricing.plans3.features3"),
    t("home.pricing.plans3.features4"),
    t("home.pricing.plans3.features5"),
  ];



 





  return (
    <div className="containers ">
      <div className="pricing-container">
        <div className="pricing-header">
          <H5 centered text={t("home.pricing.heading")} />
          <H2 centered text={t("home.pricing.subheading")} />
        </div>

        <div className="price-card-container">
          <PricingCard
            title={t("home.pricing.plans1.title")}
            price={t("home.pricing.plans1.price")}
            content={t("home.pricing.plans1.content")}
            button={t("home.pricing.plans.button")}
            features={features1}
            index={0}
          />
          <PricingCard
            title={t("home.pricing.plans2.title")}
            price={t("home.pricing.plans2.price")}
            content={t("home.pricing.plans2.content")}
            button={t("home.pricing.plans.button")}
            features={features2}
            index={1}
          />
          <PricingCard
            title={t("home.pricing.plans3.title")}
            price={t("home.pricing.plans3.price")}
            content={t("home.pricing.plans3.content")}
            button={t("home.pricing.plans.button")}
            features={features3}
            index={2}
          />
        </div>
      </div>
    </div>
  );
}
