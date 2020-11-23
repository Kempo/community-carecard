import yourAvGuyImg from '../../../../images/your-AV-guy.jpg';
import ckNailSpaImg from '../../../../images/kathy-huynh-CK.jpg';
import lastMinuteGearImg from '../../../../images/last-minute-gear-james-dong.jpg';
import stBernardImg from '../../../../images/joseph-nguyen.jpg';

export const mockBusinesses = t => [
  {
    title: t('FEATURED.0.TITLE'),
    image: lastMinuteGearImg,
    subText: t('FEATURED.0.DESC'),
    linkID: 'FEATURED.0.LINK',
    loc: t('FEATURED.0.LOCATION'),
    googlePlaceId: 'ChIJxcAyA46AhYARIlM-588XQB8',
  },
  {
    title: t('FEATURED.1.TITLE'),
    image: ckNailSpaImg,
    subText: t('FEATURED.1.DESC'),
    linkID: 'FEATURED.1.LINK',
    loc: t('FEATURED.1.LOCATION'),
    googlePlaceId: 'ChIJmTj3QCOGO4YRzqr5hD3wmy8',
  },
  {
    title: t('FEATURED.2.TITLE'),
    image: yourAvGuyImg,
    subText: t('FEATURED.2.DESC'),
    linkID: 'FEATURED.2.LINK',
    loc: t('FEATURED.2.LOCATION'),
    googlePlaceId: 'ChIJL-1YWmGJToYR39ysEoeUV44',
  },
  {
    title: t('FEATURED.3.TITLE'),
    image: stBernardImg,
    subText: t('FEATURED.3.DESC'),
    linkID: 'FEATURED.3.LINK',
    loc: t('FEATURED.3.LOCATION'),
    googlePlaceId: 'ChIJySE6y_gCnogRPC_4pnGujjw',
  },
];
