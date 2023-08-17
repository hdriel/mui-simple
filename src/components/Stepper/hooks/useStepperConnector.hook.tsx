import React, { cloneElement, isValidElement, useMemo } from 'react';
import { Check as CheckIcon } from '@mui/icons-material';
import { ConnectorStepIconRoot, QontoConnector, QontoStepIconRoot, StepConnector } from '../Stepper.styled';
import { numberToPx } from '../../../utils/helpers';

interface UseStepperConnectorHookProps {
    color: string;
    orientation: 'horizontal' | 'vertical';
    qontoStyle: boolean;
    icons: any[];
    iconListSize: number;
    isCustomStyleUsed: boolean;
    customStyleProps: Record<string, any>;
}
interface UseStepperConnectorHookResponse {
    QontoStepIconMemo: React.ReactElement | undefined;
    ConnectorStepIconMemo: React.ReactElement | undefined;
    connector: React.ReactElement;
}

export const useStepperConnector = ({
    color: customColor,
    orientation,
    qontoStyle,
    icons,
    iconListSize,
    isCustomStyleUsed,
    customStyleProps,
}: UseStepperConnectorHookProps): UseStepperConnectorHookResponse => {
    const ConnectorStepIconMemo = useMemo(() => {
        return !qontoStyle && (iconListSize || isCustomStyleUsed)
            ? function ConnectorStepIcon({ icon, active, completed, className }) {
                  return (
                      <ConnectorStepIconRoot
                          ownerState={{ completed, active }}
                          className={className}
                          background={customStyleProps?.background}
                          fontSize={customStyleProps?.fontSize}
                          padding={customStyleProps?.padding}
                      >
                          {icons?.[String(icon)] ?? icon}
                      </ConnectorStepIconRoot>
                  );
              }
            : undefined;
    }, [
        icons,
        iconListSize,
        qontoStyle,
        isCustomStyleUsed,
        customStyleProps?.background,
        customStyleProps?.fontSize,
        customStyleProps?.padding,
    ]);

    const QontoStepIconMemo = useMemo(() => {
        return qontoStyle
            ? function ConnectorStepIcon({ icon, active, completed, className }) {
                  const dotIcon = isValidElement(customStyleProps?.dotIcon) ? (
                      cloneElement(customStyleProps.dotIcon, {})
                  ) : (
                      <div className="QontoStepIcon-circle" color={customColor} />
                  );

                  const checkIcon = isValidElement(customStyleProps?.checkIcon) ? (
                      cloneElement(customStyleProps.checkIcon, {
                          className: 'QontoStepIcon-completedIcon',
                      } as any)
                  ) : (
                      <CheckIcon
                          className="QontoStepIcon-completedIcon"
                          sx={{ fontSize: customStyleProps?.fontSize ?? '22px' }}
                      />
                  );

                  return (
                      <QontoStepIconRoot
                          ownerState={{ active }}
                          className={className}
                          background={customStyleProps?.background}
                          padding={numberToPx(customStyleProps?.padding)}
                          fontSize={numberToPx(customStyleProps?.fontSize)}
                          color={customColor}
                      >
                          {completed ? checkIcon : customStyleProps?.dotIcon ?? dotIcon}
                      </QontoStepIconRoot>
                  );
              }
            : undefined;
    }, [
        qontoStyle,
        customStyleProps?.background,
        customStyleProps?.padding,
        customStyleProps?.fontSize,
        customStyleProps?.dotIcon,
        customStyleProps?.checkIcon,
        customColor,
    ]);

    const connector = qontoStyle ? (
        <QontoConnector orientation={orientation ?? ''} color={customColor} {...customStyleProps} />
    ) : iconListSize || isCustomStyleUsed ? (
        <StepConnector orientation={orientation ?? ''} color={customColor} {...customStyleProps} />
    ) : undefined;

    return { QontoStepIconMemo, ConnectorStepIconMemo, connector };
};
