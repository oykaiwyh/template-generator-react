import { IETextDefaultProps, PropToForm } from '@/utils/interface';
import { Col, InputNumber, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { CSSProperties, ReactNode, memo } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => (
  // <div style={{ display: 'flex', alignItems: 'center' }}>
  <Row align="middle" style={{ marginBottom: '10px' }}>
    {(children as []).map((child, index) => (
      <Col key={`${index}`} span={index === 0 ? 6 : 18}>
        {child}
      </Col>
    ))}
  </Row>
  // </div>
);

export const RenderAdapterComp = ({
  component,
  title,
  value,
  initalTransform,
  onChange,
  onChangeTransform,
  attribute,
}: PropToForm & { onChange?: (v: CSSProperties) => void } & {
  attribute?: keyof IETextDefaultProps;
}) => {
  switch (component) {
    case 'TextArea':
      return (
        <Wrapper>
          <span>{title}</span>
          <TextArea
            rows={4}
            value={value}
            onChange={(e) =>
              onChange?.({ [attribute as string]: e.target.value })
            }
          />
        </Wrapper>
      );

    case 'Input':
      return (
        <Wrapper>
          <span>{title}</span>
          <InputNumber
            min={'1'}
            value={initalTransform ? (initalTransform(value) as string) : value}
            onChange={(v) =>
              onChange?.({
                [attribute as string]: (onChangeTransform?.(v) || v) as string,
              })
            }
          />
        </Wrapper>
      );

    default:
      return <div></div>;
  }
};

const MemoRenderAdapterComp = memo(
  RenderAdapterComp,
  (prevProps, nextProps) => prevProps.value === nextProps.value,
);

export default MemoRenderAdapterComp;
