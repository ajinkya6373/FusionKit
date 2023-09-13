import  { useState } from 'react';
import Badge from '../badge';
import './card.css';

function Card({ children, shadow, textOverlay, dismiss, badges }) {
  const [isDismissed, setDismissed] = useState(false);

  const cardClasses = ['card'];
  if (shadow) {
    cardClasses.push('shadow');
  }
  if (isDismissed) {
    cardClasses.push('dismiss');
  }

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <div className={cardClasses.join(' ')}>
      {!isDismissed && (
        <>
          {textOverlay && <div className="text-overlay">{textOverlay}</div>}
          {dismiss && (
            <button className="dismiss-button" onClick={handleDismiss}>
              X
            </button>
          )}
          {badges && badges.length > 0 && (
            <div className="badge-container">
              {badges.map((badge, index) => (
                <Badge key={index} text={badge} variant="success" />
              ))}
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
}

export default Card;
