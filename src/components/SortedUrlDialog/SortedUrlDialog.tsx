'use client'

import { CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type SortedUrlDialogProps = {
	isOpen: boolean,
	setIsOpen: (open: boolean) => void,
	sortedUrl: string,
}

export function SortedUrlDialog({ isOpen, setIsOpen, sortedUrl }: SortedUrlDialogProps) {
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="link" className="sr-only">
							Link
						</Label>
						<Input
							id="link"
							value={sortedUrl || "No URL available"}
							readOnly
						/>
					</div>
					<Button type="submit" size="sm" className="px-3">
						<span className="sr-only">Copy</span>
						<CopyIcon className="h-4 w-4" />
					</Button>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
