import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon as AntdIcon, Badge } from 'antd';
import { ThemeType, IconProps } from '../../../../components/icon';

const Icon: React.SFC<IconProps> = AntdIcon;

export interface CopyableIconProps {
  type: string;
  theme: ThemeType;
  isNew: boolean;
  justCopied: string | null;
  onCopied: (type: string, text: string) => any;
}

const CopyableIcon: React.SFC<CopyableIconProps> = ({
  type, theme, isNew, justCopied, onCopied,
}) => {
  return (
    <CopyToClipboard
      text={theme === 'outlined' ? `<Icon type="${type}" />` : `<Icon type="${type}" theme="${theme}" />`}
      onCopy={(text: string) => onCopied(type, text)}
    >
      <li className={justCopied === type ? 'copied' : ''}>
        <Icon type={type} theme={theme}/>
        <span className="anticon-class">
          <Badge dot={isNew}>
            {type}
          </Badge>
        </span>
      </li>
    </CopyToClipboard>
  );
};

export default CopyableIcon;
