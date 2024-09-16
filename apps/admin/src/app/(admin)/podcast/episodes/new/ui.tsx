"use client";

import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Title,
} from "@rola/ui/components";
import { useNewEpisodeData } from "./data";

function NewEpisodePageUI() {
  const { form, handleSubmit, isLoading } = useNewEpisodeData();

  return (
    <Container>
      <Title order={3} align="left" underline>
        Nuevo episodio
      </Title>

      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <Form {...form}>
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>ID</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="ID de YouTube" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Número</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Número" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Título</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Título" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Descripción</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Descripción" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>URL</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="URL" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invitado</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Invitado" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="publishedAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Fecha</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Fecha" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Container className="text-center">
            <Button type="submit" loading={isLoading}>
              Guardar
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { NewEpisodePageUI };
