"use client";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ValyuLogoWithText() {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20L4 4h16L12 20z" />
      </svg>
      <span className="font-semibold tracking-wide">VALYU</span>
    </div>
  );
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  const { t } = useTranslation();

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="max-w-md">
      <DialogHeader onClose={handleClose}>
        <DialogTitle className="text-center text-xl">{t('auth.sign_in')}</DialogTitle>
      </DialogHeader>
      <DialogContent className="space-y-6">
        <p className="text-center text-sm text-muted-foreground">
          {t('auth.sign_in_desc')}
        </p>

        <p className="text-center text-sm text-muted-foreground">
          {t('auth.valyu_desc')}
        </p>

        {/* Signups Halted Notice */}
        <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-center">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
            {t('auth.paused_notice')}
          </p>
        </div>

        {/* Sign In Button - Disabled */}
        <Button
          disabled={true}
          className="w-full h-12 opacity-50 cursor-not-allowed"
        >
          <span className="mr-2">{t('auth.sign_in_with')}</span>
          <ValyuLogoWithText />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
