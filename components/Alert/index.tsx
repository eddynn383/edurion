"use client";

import { useEffect, useState } from 'react';
import StatusIcon from "@/components/StatusIcon";
import { IPropsAlert } from "./interface";
import sx from "@/styles/component.module.scss";
import ProgressRadial from '../ProgressRadial';
import Button from '../ButtonOld';
import Icon from '../Icon';

const Alert = ({ id, variant = "solid", status, action, position = "static", style, delay, children }: IPropsAlert) => {

    // const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const loadingDuration = 3000;

    useEffect(() => {
        if (delay) {
            const loadingTimeout = setTimeout(() => {
                if (progress >= 100) return
                setProgress(progress + 1)
            }, loadingDuration / 100);

            if (progress === 100) {
                setLoading(false)
            }

            return () => clearTimeout(loadingTimeout);
        }
    }, [progress, loading]);

    // if (!visible) {
    //     return null;
    // }



    return (
        <div className={sx["alert"]} id={id} style={style} data-variant={variant} data-status={status} data-position={position}>
            <div className={sx['alert-icon']}>
                <StatusIcon status={status} />
            </div>
            <div className={sx['alert-text']}>
                {children}
            </div>

            {
                loading && (
                    <ProgressRadial progress={progress} size={40} trackWidth={4} indicatorWidth={4} spinnerMode={true} />
                )
            }
            {/* // <ProgressRadial percentage={72} ><Button type="button" size="small" content="icon"><Icon value="close" /></Button></ProgressRadial> */}

            {action && <div className={sx['alert-action']}>{action}</div>}
        </div>
    )
}

const Title = (props: any) => <h3 className={sx['alert-title']}>{props.children}</h3>
Alert.Title = Title;

const Desciption = (props: any) => <p className={sx['alert-description']}>{props.children}</p>
Alert.Description = Desciption;

export default Alert