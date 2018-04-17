import Icon from '_components/Icon/Icon';
import cx from '_utilities/classnames';
import './MediaAccounts.scss';

const MediaAccounts = props => {
  const {accounts, stack} = props;
  return (
    <ul className={cx('MediaAccounts', {
      'MediaAccounts--stack': stack
    })}>
      {accounts.map(account => (
        <li key={account.name} className="MediaAccount-account">
          <a href={account.url} target="_blank" title={account.name}>
            <Icon name={account.name} />
          </a>
        </li>
      ))}
    </ul>
  );
}