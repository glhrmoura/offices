<template>
	<div class="relative mb-6">
		<label
			:for="id"
			:class="{ 'form-input-text__label--required': required }"
			class="inline-block text-base leading-3 mb-1 text-gray-900 font-normal"
		>
			{{ label }}
		</label>

		<div class="relative h-10">
			<input
				:id="id"
				:type="type"
				:value="value"
				:placeholder="placeholder"
				v-mask="mask"
				@blur="blur = true"
				@input="$emit('input', $event.target.value)"
				class="rounded-1 text-sm p-2 focus:border-blue-400 shadow-sm outline-none block w-full
				border-1 border-solid border-gray-200 transition-all duration-100 h-full"
				:class="{
					'border-gray-900': !!value,
					'form-input-text--error': hasInvalidChecks
				}"
			/>
			<Transition name="zoom-in-fade">
				<Icon
					v-if="hasInvalidChecks"
					size="20px"
					alt="Alert icon"
					name="alert-error.svg"
					classColor="bg-red-200"
					class="form-input-text__alert-error absolute"
				/>
			</Transition>
		</div>

		<SmoothReflow>
			<TransitionGroup name="fade">
				<div
					:key="check.message"
					v-for="check in invalidChecks"
					class="mt-1 text-xs text-red-200"
				>
					{{ check.message }}
				</div>
			</TransitionGroup>
		</SmoothReflow>
	</div>
</template>

<script>
import { genID } from '@/utils';

export default {
	name: 'FormInput',

	data() {
		return {
			blur: false
		};
	},

	props: {
		mask: String,

		value: String,

		placeholder: String,

		type: {
			type: String,
			default: 'text'
		},

		validationChecks: {
			type: Array,
			default: () => []
		},

		label: {
			type: String,
			default: 'Empty label'
		},

		required: {
			type: Boolean,
			default: false
		},

		id: {
			type: String,
			default: () => genID()
		}
	},

	computed: {
		hasInvalidChecks() {
			return this.blur && this.validationChecks.some(({ invalid }) => invalid);
		},

		invalidChecks() {
			return this.blur ? this.validationChecks.filter(({ invalid }) => invalid) : [];
		}
	}
};
</script>

<style scoped>
.zoom-in-fade-enter,
.zoom-in-fade-leave-to {
	@apply transform scale-0 opacity-0;
}

.zoom-in-fade-enter-to,
.zoom-in-fade-leave {
	@apply transform scale-100 opacity-100;
}

.zoom-in-fade-enter-active,
.zoom-in-fade-leave-active {
	@apply transition duration-200;
}

.fade-enter,
.fade-leave-to {
	@apply opacity-0;
}

.fade-leave-active {
	@apply absolute transition duration-200;
}

.fade-enter-active {
	@apply transition duration-200;
}

.form-input-text__label--required::after {
	content: "*";
	@apply relative inline-block text-gray-200;
}

.form-input-text--error {
	@apply border-red-200 !important;
}

.form-input-text__alert-error {
	top: 9px;
	right: 12px;
}
</style>
