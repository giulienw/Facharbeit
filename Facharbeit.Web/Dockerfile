FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 7084
EXPOSE 5230

ENV ASPNETCORE_URLS="https://localhost:7084;http://localhost:5230"

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN dotnet dev-certs https --trust 

WORKDIR /src
COPY . /src
RUN dotnet restore "Facharbeit.Web.csproj"

RUN dotnet build "Facharbeit.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Facharbeit.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Facharbeit.Web.dll"]
