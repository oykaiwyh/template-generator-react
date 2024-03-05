import { useEditorStore } from '@/store';
import { baseAttrTrees } from '@/utils/const';
import { IETextDefaultProps, PropToForm } from '@/utils/interface';
import { CSSProperties } from 'react';
import { useShallow } from 'zustand/react/shallow';

export const useHandlePropsToListForm = () => {
  const { currentComponentID, components, dispatch } = useEditorStore(
    useShallow((state) => ({
      currentComponentID: state.currentComponentID,
      components: state.components,
      dispatch: state.useDispatch,
    })),
  );

  const currentComponentData = components.filter(
    (item) => item.id === currentComponentID,
  )?.[0];

  const showBaseAttributeTrees =
    currentComponentData &&
    ((
      Object.keys(currentComponentData.props) as (keyof IETextDefaultProps)[]
    ).map((key) => ({
      ...baseAttrTrees[key],
      attribute: key,
      value: currentComponentData.props[key],
    })) as (PropToForm & { attribute?: keyof IETextDefaultProps })[]);

  const handleEditComponentsAttr = (value: CSSProperties) => {
    dispatch({ type: 'change', payload: value });
  };

  return {
    handleEditComponentsAttr,
    showBaseAttributeTrees,
  };
};

export default {};
