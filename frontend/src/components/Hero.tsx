type Props = { headline: string; text?: string | null; imageUrl?: string | null };

export function Hero({ headline, text, imageUrl }: Props) {
  return (
    <section className="hero">
      {imageUrl && <img src={imageUrl} alt="" loading="eager" />}
      <div>
        <p className="eyebrow">Headless CMS Demo</p>
        <h1>{headline}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
