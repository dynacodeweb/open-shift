CREATE TYPE "public"."most_important_reason" AS ENUM('be_my_own_boss', 'to_do_meaningful_work_helping_others', 'be_part_of_the_worker_community', 'to_have_more_flexibility_in_my_work_life');--> statement-breakpoint
CREATE TYPE "public"."provide_services" AS ENUM('nursing', 'personal_care');--> statement-breakpoint
CREATE TYPE "public"."reasons_for_support_work" AS ENUM('maximize_earnings', 'be_my_own_boss', 'to_do_meaningful_work_helping_others', 'be_part_of_the_worker_community', 'to_have_more_flexibility_in_my_work_life');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('admin', 'owner', 'nurse', 'user');--> statement-breakpoint
CREATE TYPE "public"."weekly_working_hours" AS ENUM('1-10', '11-25', '26-35', '36+');--> statement-breakpoint
CREATE TYPE "public"."willing_to_start_working" AS ENUM('immediately', 'within_the_next_2_weeks', 'in_2_4_weeks', 'later_than_4_weeks', 'i_am_not_sure');--> statement-breakpoint
CREATE TABLE "account" (
	"id" uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid() NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" uuid NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid() NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" uuid NOT NULL,
	"impersonated_by" text,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"role" "role" DEFAULT 'user',
	"banned" boolean DEFAULT false,
	"ban_reason" text,
	"ban_expires" timestamp,
	"last_login_method" text,
	"provide_service" "provide_services" NOT NULL,
	"weekly_working_hours" "weekly_working_hours" NOT NULL,
	"willing_to_start_working" "willing_to_start_working" NOT NULL,
	"is_terms_and_condition_accepted" boolean NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"address" jsonb NOT NULL,
	"mobile_number" varchar(15) NOT NULL,
	"reasons_for_support_work" "reasons_for_support_work",
	"most_important_reason" "most_important_reason",
	"is_onboarding_completed" boolean DEFAULT false,
	"chat_token" text,
	"chat_token_issued_at" timestamp,
	"chat_token_expired_at" timestamp,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid() NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_userId_idx" ON "account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_userId_idx" ON "session" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" USING btree ("identifier");