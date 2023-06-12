import { DOCUMENT } from "@angular/common";
import { Inject, InjectionToken } from "@angular/core";

declare global {
    interface Window { Telegram: Telegram; }
}

window.Telegram = window.Telegram || {};

export interface Telegram {
    webApp: TelegramWebApp;
}

export interface TelegramWebApp {
    platform: string;
}

/**
 * @see https://core.telegram.org/bots/webapps#initializing-web-apps
 */
export const TELEGRAM_WEB_APP = new InjectionToken('TELEGRAM_WEB_APP', {
    providedIn: 'root',
    factory: () => {
        const document: Document = Inject(DOCUMENT);

        if (!document.defaultView) return;

        return document.defaultView.Telegram.webApp;
    },
});